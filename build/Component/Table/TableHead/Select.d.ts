import React from 'react';
import { CheckboxProps, TableCellProps } from '@mui/material';
export type Props = TableCellProps & {
    disabled?: boolean;
    loading?: boolean;
    checked: boolean;
    onChange?: CheckboxProps['onChange'];
    id: CheckboxProps['id'];
    name: CheckboxProps['name'];
    value: CheckboxProps['value'];
};
declare const Select: React.FC<Props>;
export default Select;
