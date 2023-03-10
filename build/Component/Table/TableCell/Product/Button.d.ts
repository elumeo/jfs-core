import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
export type ButtonProps = {
    id?: string;
    onClick?: MuiButtonProps['onClick'];
};
declare const Button: React.FC<ButtonProps>;
export default Button;
