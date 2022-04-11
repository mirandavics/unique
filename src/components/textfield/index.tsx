import React from "react";
import { InputAdornment } from "@mui/material";
import { TextFieldProps } from "./props";
import { IconButtonStyled, TextFieldStyled } from "./styles";

export const TextField = ({
  label,
  onChange,
  helperText,
  disabled,
  icon,
  onClickIcon,
  defaultValue,
  type,
  multiline,
  rows,
  required,
  value,
  name,
}: TextFieldProps) => {
  return (
    <>
      <TextFieldStyled
        name={name}
        data-testid="textfield"
        type={type || "text"}
        defaultValue={defaultValue}
        value={value}
        label={label}
        variant="filled"
        size="small"
        onChange={onChange}
        disabled={disabled}
        helperText={helperText}
        multiline={multiline}
        rows={rows}
        required={required}
        InputProps={{
          endAdornment: icon ? (
            <InputAdornment position="end">
              <IconButtonStyled onClick={onClickIcon || undefined}>
                {icon}
              </IconButtonStyled>
            </InputAdornment>
          ) : null,
        }}
      />
    </>
  );
};
