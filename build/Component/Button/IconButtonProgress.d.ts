import React from 'react';
import { ButtonProps, IconButtonProps, PropTypes } from '@material-ui/core';
export type IconButtonProgressProps = IconButtonProps & {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    inProgress?: boolean;
    color?: PropTypes.Color;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<IconButtonProgressProps, "ref"> & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
