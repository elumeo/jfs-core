import { SxProps } from '@mui/material';
export declare const AdornmentPosition: {
    readonly start: "start";
    readonly end: "end";
};
export type AdornmentPosition = typeof AdornmentPosition[keyof typeof AdornmentPosition];
declare const usePriceFieldAdornment: (variant: AdornmentPosition) => ['endAdornment' | 'startAdornment', 'start' | 'end', SxProps];
export default usePriceFieldAdornment;
