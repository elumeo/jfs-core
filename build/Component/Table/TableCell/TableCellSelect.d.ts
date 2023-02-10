import React from 'react';
import { CheckboxProps } from '@mui/material';
import { TableCellRootProps } from './TableCellRoot';
export type TableCellSelectProps = Partial<TableCellRootProps> & {
    value: string;
    checked: boolean;
    disabled?: boolean;
    onChange: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
};
declare const TableCellSelect: React.FC<TableCellSelectProps>;
export default TableCellSelect;
