import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import notFoundImage from '../../assets/images/pageNotFound.svg';
import { devices } from '../../assets/devices';
import Button from '../../components/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      paddingY={10}
      paddingX={2}
      alignItems="center"
      sx={{
        [devices.mobile]: {
          textAlign: 'center',
          padding: '24px 8px',
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
            textAlign: 'center',
          },
        }}
      >
        <img src={notFoundImage} alt="Not Found" style={{ width: '365px' }} />
      </Grid>
      <Grid item md={4} xs={12}>
        <Box margin="auto" width="fit-content">
          <Typography variant="h4" fontWeight={700}>
            Page Not Found :(
          </Typography>
          <Typography variant="body1" mb={2}>
            Click the button bellow to go to the initial page.
          </Typography>
          <Button label="Click here" onClick={() => navigate('/')} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFound;
