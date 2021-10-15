import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
declare type TextFieldClearButtonProps = Partial<TextFieldProps> & {
    onChange: TextFieldProps['onChange'];
    iconButtonSize?: IconButtonProps['size'];
};
declare const _default: React.MemoExoticComponent<({ onChange, iconButtonSize, variant, ...rest }: TextFieldClearButtonProps) => JSX.Element>;
export default _default;
