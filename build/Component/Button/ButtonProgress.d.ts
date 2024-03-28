import React from 'react';
import { ButtonProps, PropTypes } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
export declare const wrapperStyles: CSSProperties;
export declare const mapToCircularProgressSize: (size: string) => number;
export declare const mapToCircularProgressColor: (color: PropTypes.Color) => 'inherit' | 'primary' | 'secondary';
export type ButtonProgressProps = ButtonProps & {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    inProgress?: boolean;
    color?: PropTypes.Color;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<ButtonProgressProps, "ref"> & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
