import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
declare type Props = {
    currency?: string;
    selectOnFocus?: boolean;
} & Partial<StandardTextFieldProps>;
declare const _default: React.MemoExoticComponent<({ currency, value, selectOnFocus, ...props }: Props) => JSX.Element>;
export default _default;
