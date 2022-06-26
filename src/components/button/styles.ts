/* eslint-disable no-nested-ternary */
import { Button, styled } from '@mui/material';
import { ButtonProps } from './props';
import { theme } from '../../assets/theme';

const ButtonStyled = styled(Button)((props: ButtonProps) => ({
  textTransform: 'none',
  filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))',
  transition: 'none !important',
  fontSize: 14,
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  '&:hover': {
    backgroundColor:
      props.variant === 'outlined'
        ? 'transparent'
        : props.color === 'primary'
        ? theme.palette.primary.dark
        : theme.palette.secondary.dark,
    color:
      props.variant === 'contained'
        ? '#FFFFFF'
        : props.color === 'primary'
        ? theme.palette.primary.dark
        : theme.palette.secondary.dark,
    borderColor:
      props.variant === 'outlined' && props.color === 'primary'
        ? theme.palette.primary.dark
        : theme.palette.secondary.dark,
  },
  '&:active': {
    backgroundColor:
      props.variant === 'outlined'
        ? '#FFF'
        : props.color === 'primary'
        ? theme.palette.primary.light
        : theme.palette.secondary.light,
    color:
      props.variant === 'contained'
        ? '#FFFFFF'
        : props.color === 'primary'
        ? theme.palette.primary.light
        : theme.palette.secondary.light,
    borderColor:
      props.variant === 'outlined' && props.color === 'primary'
        ? theme.palette.primary.light
        : theme.palette.secondary.light,
  },
  '&:disabled': {
    backgroundColor:
      props.variant === 'outlined' ? 'transparent' : theme.palette.light.dark,
    color: props.variant === 'outlined' ? theme.palette.light.dark : '#FFFFFF',
    filter: 'none',
  },
}));

export default ButtonStyled;
