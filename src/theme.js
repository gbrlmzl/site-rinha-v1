'use client';
import { createTheme } from '@mui/material/styles';
import { color, fontFamily, height, margin, positions, width } from '@mui/system';
import '@fontsource/roboto'
import "@fontsource/russo-one"
import "@fontsource/poppins"


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
      default: '#0E1241',
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
      fontFamily: "Roboto",
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
      title2:{
        fontSize: "1.25rem",
        fontFamily: 'Roboto',
        fontWeight: 700,

      },
      text1:{
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 500,
      },
      text2:{
        fontSize: '0.875rem',
        fontFamily: "Poppins",
        fontWeight: 400,
      },
      text2White:{
        fontSize: '0.875rem',
        fontFamily: "Poppins",
        fontWeight: 400,
        color: "#ffffff",
      },

    },
    Link: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          color: '#0051E6',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    
    
  },
);

export default theme;

