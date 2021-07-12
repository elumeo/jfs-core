import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
declare type Props = {
    currency?: string;
    value: React.ReactText;
} & Partial<StandardTextFieldProps>;
declare const _default: React.MemoExoticComponent<({ currency, value, ...props }: Props) => JSX.Element>;
export default _default;
