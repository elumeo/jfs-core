import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import definition from './Definition';

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={definition}>
    {children}
  </ThemeProvider>
);

export default Theme;