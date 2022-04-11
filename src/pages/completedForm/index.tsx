import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { devices } from "../../assets/devices";
import success from "../../assets/images/success.svg";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/form";

export const CompletedForm = () => {
  const formContext = useContext(FormContext);
  const { form } = formContext;
  console.log("Form", form);

  const navigate = useNavigate();

  return (
    <Grid
      container
      paddingY={4}
      paddingX={2}
      alignItems="center"
      sx={{
        [devices.mobile]: {
          textAlign: "center",
          padding: "24px 8px",
        },
      }}
    >
      <Grid
        item
        md={7}
        xs={12}
        textAlign="right"
        paddingTop={0}
        sx={{
          [devices.mobile]: {
            textAlign: "center",
          },
        }}
      >
        <img src={success} alt="Success" style={{ width: "365px" }} />
      </Grid>

      <Grid item md={4} xs={12}>
        <Box margin="auto" width="fit-content">
          <Typography variant="h4" fontWeight={700}>
            Form completed :)
          </Typography>
          <Typography variant="body1" mb={2}>
            An email will be sent to you regarding the progress of your request.
            Good luck!
          </Typography>
          <Typography variant="body2" mb={1}>
            Click the button bellow to go to the initial page.
          </Typography>
          <Button label="Click here" onClick={() => navigate("/")} />
        </Box>
      </Grid>
    </Grid>
  );
};
