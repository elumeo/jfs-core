export declare const limit: (number: number, min: number, max: number) => number;
export declare const getGroupingNumberFormatRegex: (groupingSeparator: string, decimalSeparator: string, allowDecimals: boolean) => RegExp;
export declare const getNonGroupingNumberFormatRegex: (decimalSeparator: string, allowDecimals: boolean) => RegExp;
export declare const isValidLocalisedNumber: (value: string | number, groupingSeparator: string, decimalSeparator: string, allowDecimals: boolean) => boolean;
export declare const getDivider: (divideValue: number) => (input: number, showDecimals: boolean) => number;
export declare const divideBy100: (input: number, showDecimals: boolean) => number;
export declare const getDecimalSeparator: (locale: string) => string;
export declare const getGroupingSeparator: (locale: string) => string;
