import React from 'react';
import { ButtonProps, IconButtonProps, PropTypes } from '@mui/material';
export declare type IconButtonProgressProps = IconButtonProps & {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    inProgress?: boolean;
    color?: PropTypes.Color;
};
declare const IconButtonProgress: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLButtonElement>>;
export default IconButtonProgress;
