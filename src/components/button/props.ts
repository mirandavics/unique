import { MouseEventHandler } from 'react';
import { SxProps } from '@mui/material';
import { Theme } from '@emotion/react';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'contained';
  disabled?: boolean;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: string;
  type?: 'button' | 'submit' | 'reset';
  sx?: SxProps<Theme>;
}
