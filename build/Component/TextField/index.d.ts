import React from 'react';
import { IconProps, TextFieldProps } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
export declare type Props = TextFieldProps & {
    clearButtonSize?: IconButtonProps['size'];
    clearButtonProps?: IconButtonProps;
    clearIconSize?: IconButtonProps['size'] & IconProps['fontSize'];
    hideClearButton?: boolean;
    forceEnableClearButton?: boolean;
};
declare const TextField: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLDivElement>>;
export default TextField;
