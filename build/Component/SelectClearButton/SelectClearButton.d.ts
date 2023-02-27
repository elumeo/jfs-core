import React from 'react';
import { InputBaseProps, ChipProps, FormControlProps, SelectProps as MUISelectProps } from '@mui/material';
import { ValueType } from './ValueRenderer';
export type SelectOption = {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
};
export type SelectProps<IsMulti extends boolean = undefined> = FormControlProps & Pick<MUISelectProps<ValueType<IsMulti>>, 'multiple' | 'color' | 'disabled'> & {
    canClear?: boolean;
    canUnselect?: boolean;
    renderAsChip?: boolean;
    maxValuesToDisplayInInput?: number;
    chipProps?: Partial<ChipProps>;
    inputProps?: InputBaseProps;
    options?: SelectOption[];
    value?: IsMulti extends true ? string[] : string;
    multiple?: IsMulti;
    label?: React.ReactNode;
    onChange: (value: IsMulti extends true ? string[] : string) => void;
    loading?: boolean;
    loadingSize?: number;
    helperText?: React.ReactNode;
    selectProps?: MUISelectProps<ValueType<IsMulti>>;
} & ({
    options: SelectOption[];
    children?: never;
} | {
    children: React.ReactNode;
    options?: never;
});
declare const SelectClearButton: <IsMulti extends boolean = undefined>({ onChange, renderAsChip, value, variant, canClear, canUnselect, label, color, chipProps, inputProps, children, options, maxValuesToDisplayInInput, loading, loadingSize, selectProps, helperText, ...rest }: SelectProps<IsMulti>) => JSX.Element;
export default SelectClearButton;
