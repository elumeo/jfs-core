import React from 'react';
import { ChipProps, FormControlProps, IconProps, SelectProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
export declare type SelectOption = {
    value: string;
    label: string;
};
export declare type Props = Partial<Omit<SelectProps, 'onChange'>> & {
    onChange: (value: string | string[]) => void;
    clearButtonSize?: IconButtonProps['size'];
    clearIconSize?: IconProps['fontSize'];
    formControlProps?: Partial<FormControlProps>;
    valueChipProps?: Partial<ChipProps>;
    renderValueAsChip?: boolean;
    maxValuesToDisplayInInput?: number;
    options: SelectOption[];
};
declare const _default: React.MemoExoticComponent<({ onChange, clearButtonSize, clearIconSize, variant, endAdornment, formControlProps, valueChipProps, renderValueAsChip, maxValuesToDisplayInInput, options, ...rest }: Props) => JSX.Element>;
export default _default;
