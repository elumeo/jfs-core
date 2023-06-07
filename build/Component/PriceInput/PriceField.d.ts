import React from 'react';
import { type Props as TextFieldProps } from '../TextField';
type Props = {
    currency?: string;
    selectOnFocus?: boolean;
    value: string | number;
    min?: number;
    max?: number;
    showDecimals?: boolean;
} & TextFieldProps;
declare const PriceField: React.FC<Props>;
export default PriceField;
