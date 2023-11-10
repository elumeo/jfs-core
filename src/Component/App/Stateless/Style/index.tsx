import React from 'react';
import { CssBaseline } from '@mui/material';
import Theme from './Theme';
import 'material-icons/iconfont/material-icons.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import "@fontsource/comic-neue"; // Defaults to weight 400
import "@fontsource/comic-neue/400.css"; // Specify weight
import "@fontsource/comic-neue/400-italic.css";

const Style: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Theme>
    <CssBaseline />
    {children}
  </Theme>
);

export default Style;
