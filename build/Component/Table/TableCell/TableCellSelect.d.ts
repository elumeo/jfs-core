import React from 'react';
import { CheckboxProps } from '@material-ui/core';
export declare type TableCellSelectProps = {
    value: string;
    checked: boolean;
    disabled?: boolean;
    onChange: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
};
declare const _default: React.MemoExoticComponent<({ value, checked, disabled, onChange, id, name }: TableCellSelectProps) => JSX.Element>;
export default _default;
