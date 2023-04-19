// ** MUI Imports
import type { Theme } from '@mui/material/styles';

// ** Util Import

const Alert = (theme: Theme) => {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: 'center',
          '&.MuiDisabledIcon .MuiAlert-icon': {
            display: 'none',
          },
          '.MuiAlert-message': {
            textAlign: 'left',
          },

          // responsive
          [theme.breakpoints.down('sm')]: {
            padding: '6px 10px',
            '.MuiAlert-message': {
              padding: '4px 0',
            },
            '.MuiAlert-action': {
              paddingLeft: '10px',
            },
          },
        },
      },
    },
  };
};

export default Alert;
