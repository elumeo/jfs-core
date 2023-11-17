import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useTheme from './useTheme';

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {theme} = useTheme();
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
};

export default Theme;
