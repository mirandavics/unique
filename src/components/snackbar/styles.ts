import { Alert, styled } from '@mui/material';
import { theme } from '../../assets/theme';

const AlertStyled = styled(Alert)({
  color: 'white',
  '.MuiAlert-icon': {
    color: 'white',
  },
  '.MuiAlert-message': {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  '.MuiIconButton-root': {
    padding: '2px 5px',
  },
  '&.MuiAlert-standardError': {
    backgroundColor: theme.palette.error.main,
  },
  '&.MuiAlert-standardSuccess': {
    backgroundColor: theme.palette.success.main,
  },
});

export default AlertStyled;
