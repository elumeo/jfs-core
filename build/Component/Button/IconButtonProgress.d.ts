import React from 'react';
import { ButtonProps, IconButtonProps, PropTypes } from '@mui/material';
export type IconButtonProgressProps = IconButtonProps & {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    inProgress?: boolean;
    color?: PropTypes.Color;
};
declare const IconButtonProgress: React.ForwardRefExoticComponent<Omit<IconButtonProgressProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default IconButtonProgress;
