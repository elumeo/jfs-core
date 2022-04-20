import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
declare type Props = {
    currency: string;
    value: React.ReactText;
    showDecimals?: boolean;
    min?: number;
    max?: number;
} & Partial<StandardTextFieldProps>;
declare const _default: React.MemoExoticComponent<({ currency, value, showDecimals, min, max, ...props }: Props) => JSX.Element>;
export default _default;
