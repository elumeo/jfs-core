import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
declare type Props = {
    currency?: string;
} & TextFieldProps;
declare const TextField: React.FC<Props>;
export default TextField;
