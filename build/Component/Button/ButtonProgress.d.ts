import React from 'react';
import { ButtonProps, CircularProgressProps, PropTypes, SxProps } from '@mui/material';
export declare const wrapperStyles: SxProps;
export declare const mapToCircularProgressSize: (size: string) => number;
export declare const mapToCircularProgressColor: (color: PropTypes.Color) => 'inherit' | 'primary' | 'secondary';
export declare type ButtonProgressProps = ButtonProps & {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    inProgress?: boolean;
    color?: PropTypes.Color;
    spinnerColor?: CircularProgressProps['color'];
};
declare const ButtonProgress: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLButtonElement>>;
export default ButtonProgress;
