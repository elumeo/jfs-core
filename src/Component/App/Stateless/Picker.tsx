import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';

export type Props = {
  children: MuiPickersUtilsProviderProps['children'];
}

const Picker = ({ children }: Props) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    {children}
  </MuiPickersUtilsProvider>
);

export default Picker;
