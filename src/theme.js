'use client';
import { createTheme } from '@mui/material/styles';
import { fontFamily, height, margin, positions, width } from '@mui/system';
import '@fontsource/roboto'
import "@fontsource/russo-one"


const theme = createTheme({
  palette: {
    primary: {
      main: '#0051E6',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
      contrastText: '#E3E3E3',
    },
    background: {
      default: '#000000',
    },
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          // aqui você estiliza a classe `.MuiAccordionSummary-content`
          justifyContent: 'center',
          padding: '0 8px',
          fontWeight: 600,
        },
        contentGutters: {
          // aqui você estiliza a `.MuiAccordionSummary-contentGutters`
          marginLeft: '16px',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          
        },
      },
    },
  },
    
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'dense',
        
        
        fullWidth: true,
        
      }
  },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontSize: '0.85rem',
          fontWeight: 500,
          height: '40px',
          '@media (min-width:600px)': {
            fontSize: '1rem',
            height: '56px',
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
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
      h1: {
        fontSize: '2rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '1rem',
        fontFamily: 'Archivo Black',
        fontWeight: 700,
      },
      body2: {
        fontSize: '0.875rem',
        
      },
      title: {
        fontSize: '1.5rem',
        fontFamily: 'Russo One',
        fontWeight: 700,
      },
      text1:{
        fontSize: '1rem',
        fontFamily: 'Russo One',
        fontWeight: 400,
      }

    },
    
    
  },
);

export default theme;

