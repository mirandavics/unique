import React from 'react';
import ButtonStyled from './styles';
import { ButtonProps } from './props';

const Button = ({
  color,
  variant,
  disabled,
  label,
  onClick,
  children,
  type,
  sx,
}: ButtonProps) => (
  <ButtonStyled
    data-testid="button"
    color={color || 'primary'}
    variant={variant || 'contained'}
    label={label}
    type={type || 'button'}
    disabled={disabled}
    onClick={onClick}
    disableTouchRipple
    sx={sx}
  >
    {children || label}
  </ButtonStyled>
);

export default Button;
