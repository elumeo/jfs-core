import React from 'react';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import definition from './Definition';

const Theme: React.FC = ({ children }) => (
  <MuiThemeProvider theme={definition}>
    <ThemeProvider theme={definition}>
      <StylesProvider injectFirst>
        {children}
      </StylesProvider>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default Theme;
