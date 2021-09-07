import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const Picker: React.FC = ({ children }) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    {children}
  </MuiPickersUtilsProvider>
);

export default Picker;