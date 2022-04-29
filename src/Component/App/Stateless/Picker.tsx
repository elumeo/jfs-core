import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider, LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider';
import MomentUtils from '@date-io/moment';
// import { MuiPickersUtilsProviderProps } from '@mui/x-date-pickers/MuiPickersUtilsProvider';

export type Props = {
  children: LocalizationProviderProps['children'];
}

const Picker = ({ children }: Props) => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    {children}
  </LocalizationProvider>
);

export default Picker;
