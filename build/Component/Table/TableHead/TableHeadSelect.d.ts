import React from 'react';
import { CheckboxProps } from '@material-ui/core';
export type TableHeadSelectProps = {
    height?: number;
    disabled?: boolean;
    loading?: boolean;
    checked: boolean;
    className?: string;
    onChange?: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
    value?: CheckboxProps['value'];
};
declare const _default: React.MemoExoticComponent<({ disabled, loading, checked, height, onChange, id, name, value, className }: TableHeadSelectProps) => JSX.Element>;
export default _default;
