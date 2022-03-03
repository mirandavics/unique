import { IconButton, styled, TextField } from "@mui/material";
import { TextFieldProps } from "./props";
import { theme } from "../../assets/theme";

export const TextFieldStyled = styled(TextField)((props: TextFieldProps) => ({
  width: "100%",
  ".MuiFilledInput-root, .MuiFilledInput-root:hover, .MuiFilledInput-root.Mui-focused, .MuiFilledInput-root.Mui-disabled":
    {
      borderRadius: 0,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.light.light,
      "&.Mui-disabled": {
        color: theme.palette.text.primary,
      },
    },
  "label.MuiInputLabel-root": {
    color: theme.palette.light.dark,
    "&.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "&.Mui-disabled": {
      color: theme.palette.light.main,
    },
  },
  ".MuiFilledInput-root:before, .MuiFilledInput-root:hover:not(.Mui-disabled):before":
    {
      borderBottom: `2px solid ${theme.palette.light.dark}`,
    },
  ".MuiFilledInput-root.Mui-disabled:before": {
    borderBottom: `2px solid ${theme.palette.light.main}`,
  },
  input: {
    fontSize: 16,
  },
  "p.MuiFormHelperText-root": {
    fontSize: 12,
    color: theme.palette.light.dark,
    "&.Mui-disabled": {
      color: theme.palette.light.main,
    },
  },
}));

export const IconButtonStyled = styled(IconButton)({
  "&:hover": {
    backgroundColor: "unset",
  },
});
