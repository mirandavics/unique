import React, { useState } from "react";
import { Box } from "@mui/material";
import { PersonalData } from "./personalData";
import { Button } from "../../components/button";
import { Experience } from "../experience";
import { CompletedForm } from "../completedForm";

export const Form = () => {
  const [step, setStep] = useState(1);

  const renderPage = () => {
    switch (step) {
      case 1:
        return <PersonalData />;
      case 2:
        return <Experience />;
      case 3:
        /*here you could call a method to send a request for complete the form
         in this cenario the request form was successful*/
        return <CompletedForm />;
    }
  };

  return (
    <Box sx={{ margin: 4 }}>
      {renderPage()}

      {step !== 3 && (
        <Box textAlign="right" mt={2}>
          {step > 1 && (
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
          <Button
            label="Next"
            variant="outlined"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </Button>
        </Box>
      )}
    </Box>
  );
};
