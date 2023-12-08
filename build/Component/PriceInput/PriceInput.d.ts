import React from 'react';
import { type Props as TextFieldProps } from '../TextField';
import { AdornmentPosition } from '../../Effect/usePriceFieldAdornment';
import { LANGUAGE } from '../../Types/Language';
type Props = {
    language?: LANGUAGE;
    currency?: string;
    selectOnFocus?: boolean;
    valueInCent?: number;
    min?: number;
    max?: number;
    showDecimals?: boolean;
    textFieldProps?: Omit<TextFieldProps, 'value' | 'selectOnFocus' | 'error' | 'onFocus' | 'onBlur' | 'onChange' | 'InputProps' | 'disabled'>;
    disabled?: TextFieldProps['disabled'];
    setValue?: (value: number) => void;
    currencyPosition?: AdornmentPosition;
};
declare const PriceField: React.FC<Props>;
export default PriceField;
