import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import definition from './Definition';

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={definition}>
    {children}
  </ThemeProvider>
);

export default Theme;
