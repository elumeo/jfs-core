import React from 'react';
import { CheckboxProps, TableCellProps } from '@mui/material';
export declare type Props = Partial<Omit<TableCellProps, 'onChange'>> & {
    value: string | number;
    checked: boolean;
    disabled?: boolean;
    onChange: CheckboxProps['onChange'];
    id?: CheckboxProps['id'];
    name?: CheckboxProps['name'];
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
