import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Theme, {Props as ThemeProps} from './Theme';
import 'material-icons/iconfont/material-icons.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

type Props = {
  children: ThemeProps['children'];
}

const Style = ({ children }: Props) => (
  <Theme>
    <CssBaseline/>
    {children}
  </Theme>
);

export default Style;
