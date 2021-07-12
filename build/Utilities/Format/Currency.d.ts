import { ReactText } from 'react';
export declare const getCurrencySign: (currency: string) => string;
export declare const formatDisplay: (value: ReactText, min?: number, max?: number) => string;
export declare const getCurrency: (currency: string, value: number, showFraction?: boolean, withCurrencySign?: boolean) => string;
export declare const intlThousandsSeperator: string;
export declare const intlDecSeparator: string;
export declare const replaceAllNonNumericOrSeperatorRegex: RegExp;
