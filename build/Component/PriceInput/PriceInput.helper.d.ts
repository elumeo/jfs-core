import * as Country from '../../Types/Country';
import { FormatNumberOptions } from 'react-intl';
export declare const sanitize: (value: string, decimalSeparator: string) => string;
export declare const toLocaleStringFractionOptions: (fraction?: number) => FormatNumberOptions;
export declare const getLocaleString: (locale: Country.Locale, input: number, grouping?: boolean, showDecimals?: boolean) => string;
