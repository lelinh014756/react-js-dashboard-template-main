// ** MUI Imports
import type { Theme } from '@mui/material/styles';

// ** Theme Config Imports

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'success' },
          style: {
            color: '#fff',
            backgroundColor: theme.palette.success.dark,
            '&:hover': {
              backgroundColor: theme.palette.success.main,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'warning' },
          style: {
            color: '#fff',
            backgroundColor: theme.palette.warning.dark,
            '&:hover': {
              backgroundColor: theme.palette.warning.main,
            },
          },
        },
      ],
    },
  };
};

export default Button;
