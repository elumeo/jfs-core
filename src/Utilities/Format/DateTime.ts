import { FormatDateOptions } from 'react-intl';

export const getDefaultTimeFormatOptions = (withSeconds = false): FormatDateOptions => withSeconds === false
  ? { hour: '2-digit', minute: '2-digit' }
  : { hour: '2-digit', minute: '2-digit', second: '2-digit' }
;

export const getDefaultDateFormatOptions = (): FormatDateOptions => ({ year: 'numeric', month: '2-digit', day: '2-digit' });

export const getDefaultDateFormat = (): string => 'DD.MM.YYYY';

export const getDefaultTimeFormat = (): string => 'HH:mm';
