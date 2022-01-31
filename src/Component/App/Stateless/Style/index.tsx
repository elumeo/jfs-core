import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Theme from './Theme';

const Style: React.FC = ({ children }) => (
  <Theme>
    <CssBaseline/>
    {children}
  </Theme>
);

export default Style;
