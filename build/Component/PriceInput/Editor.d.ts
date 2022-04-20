import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
export declare type Props = {
    currency: string;
    selectOnFocus?: boolean;
    value: React.ReactText;
    min?: number;
    max?: number;
} & Partial<StandardTextFieldProps>;
declare const _default: React.MemoExoticComponent<({ currency, value, selectOnFocus, min, max, ...props }: Props) => JSX.Element>;
export default _default;
