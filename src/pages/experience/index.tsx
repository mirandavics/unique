import React, { useContext, useEffect, useState } from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import Button from '../../components/button';
import ExperienceDialog from './dialog';
import { ExperienceModel } from './dialog/props';
import { devices } from '../../assets/devices';
import AddInformation from '../../assets/images/addInformation.svg';
import FormContext from '../../context/form';
import { SnackbarProps } from '../../components/snackbar/props';
import Snackbar from '../../components/snackbar';

const Experience = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [model, setModel] = useState({} as ExperienceModel);
  const [snackbar, setSnackbar] = useState({} as SnackbarProps);

  const formContext = useContext(FormContext);
  const { form, handleExperiencesChange } = formContext;

  useEffect(() => {
    /* update experience */
  }, [form.experiences]);

  const newExperience = () => {
    setModel({
      job: '',
      companyName: '',
      description: '',
    } as ExperienceModel);
    setOpenDialog(true);
  };

  const deleteExperience = (indexArray: number) => {
    const experiencesArr = form.experiences.filter(
      (item, index) => index !== indexArray
    );

    handleExperiencesChange(experiencesArr);
  };

  const changeSnackbar = (
    open: boolean,
    message: string,
    type: 'success' | 'error'
  ) => {
    setSnackbar({
      open,
      message,
      type,
      onClose: () =>
        setSnackbar((prevState) => ({ ...prevState, open: false })),
    });
  };

  const saveExperience = (experience: ExperienceModel) => {
    handleExperiencesChange([experience, ...form.experiences]);
    setOpenDialog(false);
    changeSnackbar(true, 'Experience saved successfully', 'success');
  };

  return (
    <Box>
      <Card>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item md={12} xs={12} mb={3} sx={{ paddingLeft: 0 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{
                [devices.mobile]: {
                  flexDirection: 'column',
                },
              }}
            >
              <Typography
                variant="h5"
                color="primary.main"
                fontWeight={600}
                sx={{
                  [devices.mobile]: {
                    marginBottom: 1,
                  },
                }}
              >
                Experience
              </Typography>
              <Box>
                <Button label="Add Index" onClick={newExperience}>
                  Add Experience
                </Button>
              </Box>
            </Box>
          </Grid>
          {!form.experiences.length && (
            <Box sx={{ margin: 'auto' }}>
              <img
                src={AddInformation}
                alt="No data found"
                style={{ width: '365px' }}
              />
            </Box>
          )}
          {form.experiences.map((experience, index) => (
            <Grid
              item
              md={8}
              xs={12}
              mt={0}
              ml={3}
              key={experience.job}
              sx={{
                [devices.mobile]: {
                  marginLeft: 0,
                },
              }}
            >
              <Box display="flex">
                <Typography variant="h6" fontWeight={700}>
                  {experience.job}
                </Typography>
                <Box onClick={() => deleteExperience(index)}>
                  <DeleteForever
                    sx={{
                      color: 'light.dark',
                      position: 'relative',
                      top: '3px',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </Box>
              <Typography variant="body2" mb={1}>
                {experience.companyName}
              </Typography>
              <Typography variant="body1">{experience.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
      <ExperienceDialog
        open={openDialog}
        close={() => setOpenDialog(false)}
        action={(data: ExperienceModel) => saveExperience(data)}
        model={model}
      />
      <Snackbar
        open={snackbar.open}
        type={snackbar.type}
        onClose={snackbar.onClose}
        message={snackbar.message}
      />
    </Box>
  );
};

export default Experience;
