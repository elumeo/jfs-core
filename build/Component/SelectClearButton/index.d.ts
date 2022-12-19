import React, { ReactNode } from 'react';
import { ChipProps, FormControlProps, IconProps, SelectProps } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
export type SelectOption = {
    value: string;
    label: ReactNode;
};
export type Props = Partial<Omit<SelectProps, 'onChange'>> & {
    onChange: (value: string | string[]) => void;
    clearButtonSize?: IconButtonProps['size'];
    clearIconSize?: IconProps['fontSize'];
    formControlProps?: Partial<FormControlProps>;
    valueChipProps?: Partial<ChipProps>;
    renderValueAsChip?: boolean;
    maxValuesToDisplayInInput?: number;
    options: SelectOption[];
    loading?: boolean;
    loadingSize?: number;
    displayClearButton?: boolean;
};
declare const _default: React.MemoExoticComponent<({ onChange, clearButtonSize, clearIconSize, variant, endAdornment, formControlProps, valueChipProps, renderValueAsChip, maxValuesToDisplayInInput, options, loading, loadingSize, displayClearButton, ...rest }: Props) => JSX.Element>;
export default _default;
