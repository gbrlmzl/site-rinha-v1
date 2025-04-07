import { createTheme } from '@mui/material/styles';
/*import {ArchivoBlack} from 'next/font/google';

const ArchivoBlack = ArchivoBlack({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
});*/

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'dense',
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.85rem',
          height: '40px',
          '@media (min-width:600px)': {
            fontSize: '1rem',
            height: '56px',
          },

          // Remove os spinners (setas) de inputs type="number"
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        },
        input: {
          padding: '10px 14px',
          '@media (min-width:600px)': {
            padding: '16.5px 14px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          '@media (min-width:600px)': {
            fontSize: '1rem',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '0.75rem',
          '@media (min-width:600px)': {
            fontSize: '1rem',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 4, // Menos espaçamento interno em telas pequenas
          '@media (min-width:600px)': {
            padding: 8,
          },
        },
      },
    },
    
  },
});

export default theme;

