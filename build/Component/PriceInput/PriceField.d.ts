import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
type Props = {
    currency?: string;
    selectOnFocus?: boolean;
    value: React.ReactText;
    min?: number;
    max?: number;
    showDecimals?: boolean;
    onChange?: StandardTextFieldProps['onChange'];
} & Partial<StandardTextFieldProps>;
declare const PriceField: ({ currency, value, selectOnFocus, showDecimals, min, max, ...props }: Props) => JSX.Element;
export default PriceField;
