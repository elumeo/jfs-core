import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
const Picker = ({ children }) => (React.createElement(MuiPickersUtilsProvider, { utils: MomentUtils }, children));
export default Picker;
