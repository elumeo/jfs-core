import React from 'react';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import de from 'date-fns/locale/de';
import en from 'date-fns/locale/en-GB';
import it from 'date-fns/locale/it';

const locales = {de, en, it}

const Picker: React.FC<React.PropsWithChildren & { locale: string }> = ({children, locale}) => {
  return <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locales[locale as keyof typeof locales]}>
    {children}
  </LocalizationProvider>;
}

export default Picker;
