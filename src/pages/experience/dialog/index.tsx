import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import { Button } from "../../../components/button";
import { ExperienceDialogProps, ExperienceModel } from "./props";
import { Close } from "@mui/icons-material";
import { theme } from "../../../assets/theme";
import { TextField } from "../../../components/textfield";
import { SnackbarProps } from "../../../components/snackbar/props";
import { Snackbar } from "../../../components/snackbar";

export const ExperienceDialog = ({
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

  const changeSnackbar = (
    open: boolean,
    message: string,
    type: "success" | "error"
  ) => {
    setSnackbar({
      open: open,
      message: message,
      type: type,
      onClose: () =>
        setSnackbar((prevState) => ({ ...prevState, open: false })),
    });
  };

  const save = () => {
    if (!fields.job || !fields.companyName || !fields.description) {
      changeSnackbar(true, "Please, complete the fields.", "error");
      return;
    }

    changeSnackbar(true, "Experience saved successfully", "success");
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
            position: "absolute",
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
              required
              value={fields.job}
              onChange={(event) => handleChange(event.target.value, "job")}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              label="Company Name"
              required
              value={fields.companyName}
              onChange={(event) =>
                handleChange(event.target.value, "companyName")
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
              onChange={(event) =>
                handleChange(event.target.value, "description")
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
