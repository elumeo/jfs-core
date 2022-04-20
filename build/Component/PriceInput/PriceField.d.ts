import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
declare type Props = {
    currency?: string;
    selectOnFocus?: boolean;
    value: React.ReactText;
    min?: number;
    max?: number;
    showDecimals?: boolean;
} & Partial<StandardTextFieldProps>;
declare const _default: React.MemoExoticComponent<({ currency, value, selectOnFocus, showDecimals, ...props }: Props) => JSX.Element>;
export default _default;
