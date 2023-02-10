import React from 'react';
import { InputBaseProps, ChipProps, FormControlProps, SelectProps as MUISelectProps } from '@mui/material';
import { ValueType } from './ValueRenderer';
export type SelectOption = {
    value: string;
    label: React.ReactNode;
};
export type SelectProps<IsMulti = boolean> = Partial<Omit<MUISelectProps<ValueType<IsMulti>>, 'onChange' | 'value'>> & {
    canClear?: boolean;
    canUnselect?: boolean;
    renderAsChip?: boolean;
    maxValuesToDisplayInInput?: number;
    formControlProps?: Partial<FormControlProps>;
    chipProps?: Partial<ChipProps>;
    inputProps?: InputBaseProps;
    options: SelectOption[];
    value?: IsMulti extends true ? string[] : string;
    label?: React.ReactNode;
    onChange: (value: IsMulti extends true ? string[] : string) => void;
    loading?: boolean;
    loadingSize?: number;
};
declare const SelectClearButton: <IsMulti extends boolean = boolean>({ onChange, renderAsChip, value, variant, canClear, canUnselect, label, color, chipProps, formControlProps, inputProps, options, maxValuesToDisplayInInput, loading, loadingSize, ...rest }: SelectProps<IsMulti>) => JSX.Element;
export default SelectClearButton;
