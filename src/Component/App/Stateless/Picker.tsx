import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const Picker: React.FC<React.PropsWithChildren> = ({ children }) => (
  <LocalizationProvider
    dateAdapter={AdapterMoment}>
    {children}
  </LocalizationProvider>
);

export default Picker;
