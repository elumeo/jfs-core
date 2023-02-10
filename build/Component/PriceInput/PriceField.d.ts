import React from 'react';
import { type TextFieldClearButtonProps } from '../TextFieldClearButton';
type Props = {
    currency?: string;
    selectOnFocus?: boolean;
    value: React.ReactText;
    min?: number;
    max?: number;
    showDecimals?: boolean;
} & TextFieldClearButtonProps;
declare const PriceField: React.FC<Props>;
export default PriceField;
