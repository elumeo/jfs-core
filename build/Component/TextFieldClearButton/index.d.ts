import React from 'react';
import { IconProps, TextFieldProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
export declare type TextFieldClearButtonProps = Partial<TextFieldProps> & {
    onChange: TextFieldProps['onChange'];
    clearButtonSize?: IconButtonProps['size'];
    clearIconSize?: IconProps['fontSize'];
};
declare const _default: React.MemoExoticComponent<({ onChange, clearButtonSize, clearIconSize, variant, InputProps, ...rest }: TextFieldClearButtonProps) => JSX.Element>;
export default _default;
