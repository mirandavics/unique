import React, { SetStateAction, useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { TextField } from "../../components/textfield";
import { AddressProps, PersonalDataProps, ProfessionalProps } from "./props";
import NumberFormat from "react-number-format";

export const PersonalData = () => {
  const [personal, setPersonal] = useState({} as PersonalDataProps);
  const [address, setAddress] = useState({} as AddressProps);
  const [professional, setProfessional] = useState({} as ProfessionalProps);

  const handleChange = (
    value: any,
    name: string,
    setState: SetStateAction<any>
  ) => {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              label="Full Name"
              value={personal.fullName}
              onChange={(e) =>
                handleChange(e.target.value, "fullName", setPersonal)
              }
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <NumberFormat
              label="Date of birth (YYYY-MM-DD)"
              customInput={TextField}
              format="####-##-##"
              mask={["Y", "Y", "Y", "Y", "M", "M", "D", "D"]}
              required
              value={personal.birth}
              onChange={(e: any) =>
                handleChange(e.target.value, "birth", setPersonal)
              }
            />
            {personal.birth !== undefined && isNaN(Date.parse(personal.birth)) && (
              <Typography variant="body2" color="error.main" mt={0.5}>
                Invalid Date.
              </Typography>
            )}
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              required
              label="Email Address"
              value={personal.email}
              onChange={(e) =>
                handleChange(e.target.value, "email", setPersonal)
              }
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              required
              label="Mobile number"
              value={personal.mobileNumber}
              onChange={(e) =>
                handleChange(e.target.value, "mobileNumber", setPersonal)
              }
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
              value={address.street}
              onChange={(e) =>
                handleChange(e.target.value, "street", setAddress)
              }
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              required
              label="Zipcode"
              value={address.zipCode}
              onChange={(e) =>
                handleChange(e.target.value, "zipCode", setAddress)
              }
            />
          </Grid>

          <Grid item md={8} xs={12}>
            <TextField
              required
              label="City"
              value={address.city}
              onChange={(e) => handleChange(e.target.value, "city", setAddress)}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              required
              label="State"
              value={address.state}
              onChange={(e) =>
                handleChange(e.target.value, "state", setAddress)
              }
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
              value={professional.position}
              onChange={(e) =>
                handleChange(e.target.value, "position", setProfessional)
              }
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <NumberFormat
              label="Desire pay"
              customInput={TextField}
              thousandSeparator={true}
              prefix={"$"}
              required
              value={professional.desirePay}
              onChange={(e: any) =>
                handleChange(e.target.value, "desirePay", setProfessional)
              }
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              required
              label="Tell us about yourself"
              multiline
              rows={4}
              value={professional.description}
              onChange={(e) =>
                handleChange(e.target.value, "description", setProfessional)
              }
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
