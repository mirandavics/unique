import React, { SetStateAction, useContext, useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { TextField } from "../../components/textfield";
import NumberFormat from "react-number-format";
import { FormContext } from "../../context/form";

export const PersonalData = () => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <Box>
      <Card sx={{ marginBottom: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item md={12}>
            <Typography
              variant="h5"
              color="primary.main"
              fontWeight={600}
              mb={3}
            >
              Personal Data
            </Typography>
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              required
              name="fullName"
              label="Full Name"
              value={form.personal.fullName}
              onChange={(e: any) => handleFormChange(e, "personal")}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <NumberFormat
              label="Date of birth (YYYY-MM-DD)"
              customInput={TextField}
              name="birth"
              format="####-##-##"
              mask={["Y", "Y", "Y", "Y", "M", "M", "D", "D"]}
              required
              value={form.personal.birth}
              onChange={(e: any) => handleFormChange(e, "personal")}
            />
            {form.personal.birth !== undefined &&
              isNaN(Date.parse(form.personal.birth)) && (
                <Typography variant="body2" color="error.main" mt={0.5}>
                  Invalid Date.
                </Typography>
              )}
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              required
              label="Email Address"
              name="email"
              value={form.personal.email}
              onChange={(e: any) => handleFormChange(e, "personal")}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              required
              label="Mobile number"
              name="mobileNumber"
              value={form.personal.mobileNumber}
              onChange={(e: any) => handleFormChange(e, "personal")}
            />
          </Grid>

          <Grid item md={12}>
            <Typography
              variant="h6"
              color="primary.main"
              fontWeight={600}
              mt={3}
              mb={1}
            >
              Address Information
            </Typography>
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              required
              label="Street Address"
              name="street"
              value={form.address.street}
              onChange={(e: any) => handleFormChange(e, "address")}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              required
              label="Zipcode"
              name="zipCode"
              value={form.address.zipCode}
              onChange={(e: any) => handleFormChange(e, "address")}
            />
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              required
              label="City"
              name="city"
              value={form.address.city}
              onChange={(e: any) => handleFormChange(e, "address")}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              required
              label="State"
              name="state"
              value={form.address.state}
              onChange={(e: any) => handleFormChange(e, "address")}
            />
          </Grid>
        </Grid>
      </Card>

      <Card>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item md={12}>
            <Typography
              variant="h5"
              color="primary.main"
              fontWeight={600}
              mb={3}
            >
              Professional Data
            </Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <TextField
              required
              label="Position"
              name="position"
              value={form.professional.position}
              onChange={(e: any) => handleFormChange(e, "professional")}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <NumberFormat
              label="Desire pay"
              customInput={TextField}
              thousandSeparator={true}
              prefix={"$"}
              required
              value={form.professional.desirePay}
              name="desirePay"
              onChange={(e: any) => handleFormChange(e, "professional")}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              required
              label="Tell us about yourself"
              name="description"
              multiline
              rows={4}
              value={form.professional.description}
              onChange={(e: any) => handleFormChange(e, "professional")}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
