import React from 'react';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {deDE, enUS, itIT} from '@mui/x-date-pickers/locales';
import de from 'date-fns/locale/de';
import en from 'date-fns/locale/en-GB';
import it from 'date-fns/locale/it';

const adapterLocales = {de, en, it}
const textLocales = {de: deDE, en: enUS, it: itIT}

const Picker: React.FC<React.PropsWithChildren & { locale: string }> = ({children, locale}) => {
  return <LocalizationProvider
    dateAdapter={AdapterDateFns}
    adapterLocale={adapterLocales[locale as keyof typeof adapterLocales]}
    localeText={textLocales[locale as keyof typeof textLocales].components.MuiLocalizationProvider.defaultProps.localeText}
  >{children}</LocalizationProvider>;
}

export default Picker;
