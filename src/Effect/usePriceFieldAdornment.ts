import { SxProps } from '@mui/material';

const styles = { userSelect: 'none' }
const usePriceFieldAdornment = (currency: string): ['endAdornment' | 'startAdornment', 'start' | 'end', SxProps] => {
  const adornmentType =
    currency.toLowerCase() === 'eur'
      ? 'endAdornment'
      : 'startAdornment'
  const adornmentPosition =
    currency.toLowerCase() === 'eur'
      ? 'end'
      : 'start'
  return [adornmentType, adornmentPosition, styles];
};

export default usePriceFieldAdornment;
