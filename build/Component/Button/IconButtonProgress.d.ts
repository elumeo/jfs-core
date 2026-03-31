import React from 'react';
import { ButtonProps, CircularProgressProps, IconButtonProps, PropTypes } from '@mui/material';
export declare const mapToCircularProgressColor: (color: PropTypes.Color) => 'inherit' | 'primary' | 'secondary';
export type IconButtonProgressProps = IconButtonProps & {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    inProgress?: boolean;
    color?: PropTypes.Color;
    spinnerColor?: CircularProgressProps['color'];
};
declare const IconButtonProgress: React.ForwardRefExoticComponent<Omit<IconButtonProgressProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default IconButtonProgress;
