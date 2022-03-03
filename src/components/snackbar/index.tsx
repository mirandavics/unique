import React from "react";
import { Snackbar as SnackbarMUI } from "@mui/material";
import { SnackbarProps } from "./props";
import { AlertStyled } from "./styles";

export const Snackbar = ({ open, type, onClose, message }: SnackbarProps) => {
  return (
    <SnackbarMUI
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <AlertStyled onClose={onClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </AlertStyled>
    </SnackbarMUI>
  );
};
