import { SxProps } from '@mui/material';

export const AdornmentPosition = {
  start: 'start',
  end: 'end'
} as const
export type AdornmentPosition = typeof AdornmentPosition[keyof typeof AdornmentPosition]
const styles = { userSelect: 'none' }
const usePriceFieldAdornment = (variant: AdornmentPosition): ['endAdornment' | 'startAdornment', 'start' | 'end', SxProps] => {
  const adornmentType =
    variant == AdornmentPosition.end
      ? 'endAdornment'
      : 'startAdornment'
  const adornmentPosition =
    variant == AdornmentPosition.end
      ? 'end'
      : 'start'
  return [adornmentType, adornmentPosition, styles];
};

export default usePriceFieldAdornment;
