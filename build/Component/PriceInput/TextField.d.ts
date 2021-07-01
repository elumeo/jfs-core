import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core/TextField';
declare type Props = {
    currency?: string;
    selectOnFocus?: boolean;
} & Partial<StandardTextFieldProps>;
declare const TextField: React.FC<Props>;
export default TextField;
