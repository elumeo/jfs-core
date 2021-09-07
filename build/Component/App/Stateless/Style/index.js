import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Stylesheet from './Stylesheet';
import Theme from './Theme';
const Style = ({ children }) => (React.createElement(Theme, null,
    React.createElement(Stylesheet, null),
    React.createElement(CssBaseline, null),
    children));
export default Style;
