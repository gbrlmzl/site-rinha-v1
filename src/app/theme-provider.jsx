'use client';
import * as React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../theme';

export default function ThemeRegistry({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
// This is a workaround for the Emotion cache issue in Next.js 13+ with MUI v5