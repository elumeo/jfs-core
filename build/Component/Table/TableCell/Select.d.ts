import React from 'react';
import { CheckboxProps, TableCellProps } from '@mui/material';
export type Props = Partial<TableCellProps> & {
    value: string | number;
    checked: boolean;
    disabled?: boolean;
    onChange: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
};
declare const Select: React.FC<Props>;
export default Select;
