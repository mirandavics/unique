import React, { useState, useMemo } from 'react';
import { Box } from '@mui/material';
import PersonalData from './personalData';
import Button from '../../components/button';
import Experience from '../experience';
import CompletedForm from '../completedForm';
import FormContext from '../../context/form';
import useForm from '../../hooks/useForm';
import StepsEnum from '../../common/enum/stepsEnum';
import isFormValid from '../../common/validation/formValidation';
import Snackbar from '../../components/snackbar';
import { SnackbarProps } from '../../components/snackbar/props';

const Form = () => {
  const [step, setStep] = useState(0);
  const [form, handleFormChange, handleExperiencesChange] = useForm();
  const [snackbar, setSnackbar] = useState({} as SnackbarProps);
  const providerValues = useMemo(
    () => ({ form, handleFormChange, handleExperiencesChange }),
    [form, handleFormChange, handleExperiencesChange]
  );

  const renderPage = () => {
    switch (step) {
      case StepsEnum.FORM:
        return <PersonalData />;
      case StepsEnum.EXPERIENCES:
        return <Experience />;
      case StepsEnum.SUCCESS:
        /* here you could call a method to send a request for complete the form
         in this cenario the request form was successful */
        return <CompletedForm />;
      default:
        return <PersonalData />;
    }
  };

  const handleClick = () => {
    const [isValid, message] = isFormValid(step, form);

    if (isValid) {
      setStep(step + 1);
      return;
    }

    setSnackbar({
      open: true,
      message,
      type: 'error',
      onClose: () =>
        setSnackbar((prevState) => ({ ...prevState, open: false })),
    });
  };

  return (
    <Box sx={{ margin: 4 }}>
      <FormContext.Provider value={providerValues}>
        {renderPage()}

        {step !== StepsEnum.SUCCESS && (
          <Box textAlign="right" mt={2}>
            {step > StepsEnum.FORM && (
              <Button
                variant="outlined"
                color="secondary"
                label="Back"
                type="button"
                sx={{ marginRight: 2 }}
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <Button label="Next" variant="outlined" onClick={handleClick}>
              Continue
            </Button>
          </Box>
        )}
      </FormContext.Provider>
      <Snackbar
        open={snackbar.open}
        type={snackbar.type}
        onClose={snackbar.onClose}
        message={snackbar.message}
      />
    </Box>
  );
};

export default Form;
