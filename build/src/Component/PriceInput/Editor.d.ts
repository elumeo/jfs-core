import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
declare type Props = {
    currency?: string;
    selectOnFocus?: boolean;
    value: React.ReactText;
    min?: number;
    max?: number;
} & Partial<StandardTextFieldProps>;
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
