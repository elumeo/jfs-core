import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Stylesheet from './Stylesheet';
import Theme from './Theme';

const Style: React.FC = ({ children }) => (
  <Theme>
    <Stylesheet/>
    <CssBaseline/>
    {children}
  </Theme>
);

export default Style;