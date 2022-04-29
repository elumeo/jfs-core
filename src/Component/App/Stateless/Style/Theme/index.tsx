import React from 'react';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import definition from './Definition';
import { StylesProviderProps } from '@mui/styles/StylesProvider/StylesProvider';

export type Props = {
  children: StylesProviderProps['children'];
}

const Theme = ({ children }: Props) => (
  <MuiThemeProvider theme={definition}>
    <ThemeProvider theme={definition}>
      <StylesProvider injectFirst>
        {children}
      </StylesProvider>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default Theme;
