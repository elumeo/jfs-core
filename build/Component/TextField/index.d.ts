import React from 'react';
import { IconProps, TextFieldProps } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
export type Props = TextFieldProps & {
    clearButtonSize?: IconButtonProps['size'];
    clearButtonProps?: IconButtonProps;
    clearIconSize?: IconButtonProps['size'] & IconProps['fontSize'];
    hideClearButton?: boolean;
    forceEnableClearButton?: boolean;
    selectOnFocus?: boolean;
};
declare const TextField: React.ForwardRefExoticComponent<(Omit<import("@mui/material").FilledTextFieldProps & {
    clearButtonSize?: IconButtonProps['size'];
    clearButtonProps?: IconButtonProps;
    clearIconSize?: IconButtonProps['size'] & IconProps['fontSize'];
    hideClearButton?: boolean;
    forceEnableClearButton?: boolean;
    selectOnFocus?: boolean;
}, "ref"> | Omit<import("@mui/material").OutlinedTextFieldProps & {
    clearButtonSize?: IconButtonProps['size'];
    clearButtonProps?: IconButtonProps;
    clearIconSize?: IconButtonProps['size'] & IconProps['fontSize'];
    hideClearButton?: boolean;
    forceEnableClearButton?: boolean;
    selectOnFocus?: boolean;
}, "ref"> | Omit<import("@mui/material").StandardTextFieldProps & {
    clearButtonSize?: IconButtonProps['size'];
    clearButtonProps?: IconButtonProps;
    clearIconSize?: IconButtonProps['size'] & IconProps['fontSize'];
    hideClearButton?: boolean;
    forceEnableClearButton?: boolean;
    selectOnFocus?: boolean;
}, "ref">) & React.RefAttributes<HTMLDivElement>>;
export default TextField;
