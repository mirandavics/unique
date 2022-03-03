import React from "react";
import { theme } from "../assets/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "../components/header";

export const Template: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  );
};
