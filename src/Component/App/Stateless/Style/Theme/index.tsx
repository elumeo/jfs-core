import React from 'react';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import definition from './Definition';
import { StylesProviderProps } from '@material-ui/styles/StylesProvider/StylesProvider';

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
