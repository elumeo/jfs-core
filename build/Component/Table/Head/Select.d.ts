import React from 'react';
import { CheckboxProps, TableCellProps } from '@mui/material';
export declare type Props = Omit<TableCellProps, 'onChange'> & {
    disabled?: boolean;
    loading?: boolean;
    checked: boolean;
    onChange?: CheckboxProps['onChange'];
    id: CheckboxProps['id'];
    name: CheckboxProps['name'];
    value: CheckboxProps['value'];
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
