import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import application from "../assets/images/onlineApplication.svg";
import { Button } from "../components/button";
import { devices } from "../assets/devices";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      paddingY={10}
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
        <img src={application} alt="Interview" style={{ width: "365px" }} />
      </Grid>
      <Grid item md={4} xs={12}>
        <Box
          margin="auto"
          width="fit-content"
          sx={{ [devices.largeDesktop]: { margin: 0, width: "auto" } }}
        >
          <Typography variant="h4" fontWeight={700}>
            Job application
          </Typography>
          <Typography variant="body1" mb={2}>
            Complete the form to get your unique job.
          </Typography>
          <Button label="Start Now" onClick={() => navigate("/form")} />
        </Box>
      </Grid>
    </Grid>
  );
};
