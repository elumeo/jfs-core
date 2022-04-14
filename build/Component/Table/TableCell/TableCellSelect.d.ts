import React from 'react';
import { CheckboxProps } from '@material-ui/core';
import { TableCellRootProps } from './TableCellRoot';
export declare type TableCellSelectProps = Partial<TableCellRootProps> & {
    value: string;
    checked: boolean;
    disabled?: boolean;
    onChange: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
};
declare const _default: React.MemoExoticComponent<({ value, checked, disabled, onChange, id, name, height }: TableCellSelectProps) => JSX.Element>;
export default _default;