import React from 'react';
import { IconProps, SelectProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
declare type SelectClearButtonProps = Partial<SelectProps> & {
    onChange: SelectProps['onChange'];
    clearButtonSize?: IconButtonProps['size'];
    clearIconSize?: IconProps['fontSize'];
};
declare const _default: React.MemoExoticComponent<({ children, onChange, clearButtonSize, clearIconSize, variant, endAdornment, ...rest }: SelectClearButtonProps) => JSX.Element>;
export default _default;
