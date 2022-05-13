import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import Button from '../../../components/button';
import { ExperienceDialogProps } from './props';
import theme from '../../../assets/theme';
import TextField from '../../../components/textfield';
import { SnackbarProps } from '../../../components/snackbar/props';
import Snackbar from '../../../components/snackbar';

const ExperienceDialog = ({
  open,
  close,
  action,
  model,
}: ExperienceDialogProps) => {
  const [fields, setFields] = useState(model);
  const [snackbar, setSnackbar] = useState({} as SnackbarProps);

  useEffect(() => {
    setFields(model);
  }, [model]);

  const handleChange = (value: any, name: string) => {
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const save = () => {
    if (!fields.job || !fields.companyName || !fields.description) {
      setSnackbar({
        open: true,
        message: 'Please, complete the fields.',
        type: 'error',
        onClose: () =>
          setSnackbar((prevState) => ({ ...prevState, open: false })),
      });
      return;
    }

    action(fields);
  };

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>
        Experience
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.secondary.main,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container rowSpacing={2}>
          <Grid item md={12} xs={12}>
            <TextField
              label="Job Title"
              name="job"
              required
              value={fields.job}
              onChange={(event) => handleChange(event.target.value, 'job')}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              label="Company Name"
              required
              value={fields.companyName}
              name="companyName"
              onChange={(event) =>
                handleChange(event.target.value, 'companyName')
              }
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              label="Description"
              required
              multiline
              rows={4}
              value={fields.description}
              name="description"
              onChange={(event) =>
                handleChange(event.target.value, 'description')
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          label="Cancel"
          variant="outlined"
          color="secondary"
          onClick={close}
        >
          Cancel
        </Button>
        <Button label="Save" onClick={save}>
          Save
        </Button>
      </DialogActions>
      <Snackbar
        open={snackbar.open}
        type={snackbar.type}
        onClose={snackbar.onClose}
        message={snackbar.message}
      />
    </Dialog>
  );
};

export default ExperienceDialog;
