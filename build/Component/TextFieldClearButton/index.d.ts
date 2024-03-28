import React from 'react';
import { IconProps, TextFieldProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
export type TextFieldClearButtonProps = Partial<TextFieldProps> & {
    onChange?: TextFieldProps['onChange'];
    clearButtonSize?: IconButtonProps['size'];
    clearIconSize?: IconProps['fontSize'];
    onClearClick?: () => void;
    isClearable?: boolean;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<(Omit<Partial<import("@material-ui/core").StandardTextFieldProps> & {
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    clearButtonSize?: "small" | "medium";
    clearIconSize?: "default" | "inherit" | "small" | "medium" | "large";
    onClearClick?: () => void;
    isClearable?: boolean;
}, "ref"> | Omit<Partial<import("@material-ui/core").FilledTextFieldProps> & {
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    clearButtonSize?: "small" | "medium";
    clearIconSize?: "default" | "inherit" | "small" | "medium" | "large";
    onClearClick?: () => void;
    isClearable?: boolean;
}, "ref"> | Omit<Partial<import("@material-ui/core").OutlinedTextFieldProps> & {
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    clearButtonSize?: "small" | "medium";
    clearIconSize?: "default" | "inherit" | "small" | "medium" | "large";
    onClearClick?: () => void;
    isClearable?: boolean;
}, "ref">) & React.RefAttributes<HTMLDivElement>>>;
export default _default;
