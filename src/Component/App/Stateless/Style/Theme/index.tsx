import React from 'react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import definition from './Definition';

const Theme: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CssVarsProvider theme={definition}>
    {children}
  </CssVarsProvider>
);

export default Theme;
