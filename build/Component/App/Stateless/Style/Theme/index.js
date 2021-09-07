import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import definition from './Definition';
const Theme = ({ children }) => (React.createElement(ThemeProvider, { theme: definition }, children));
export default Theme;
