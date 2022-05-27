import React from 'react';
import { FormControlProps, IconProps, SelectProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
export declare type SelectClearButtonProps = Partial<SelectProps> & {
    onChange: SelectProps['onChange'];
    clearButtonSize?: IconButtonProps['size'];
    clearIconSize?: IconProps['fontSize'];
    formControlProps?: Partial<FormControlProps>;
};
declare const _default: React.MemoExoticComponent<({ children, onChange, clearButtonSize, clearIconSize, variant, endAdornment, formControlProps, ...rest }: SelectClearButtonProps) => JSX.Element>;
export default _default;
