import React from 'react';
import { CheckboxProps } from '@mui/material';
export type TableHeadSelectProps = {
    height?: number;
    disabled?: boolean;
    loading?: boolean;
    checked: boolean;
    onChange?: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
    value?: CheckboxProps['value'];
};
declare const TableHeadSelect: React.FC<TableHeadSelectProps>;
export default TableHeadSelect;
