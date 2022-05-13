import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../assets/theme';
import Header from '../components/header';

const Template: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    {children}
  </ThemeProvider>
);

export default Template;
