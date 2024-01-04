import React from 'react';
import { CheckboxProps, TableCellProps } from '@mui/material';
export type Props = Omit<TableCellProps, 'onChange'> & {
    disabled?: boolean;
    loading?: boolean;
    checked: boolean;
    onChange?: CheckboxProps['onChange'];
    id: CheckboxProps['id'];
    name: CheckboxProps['name'];
    value: CheckboxProps['value'];
    slotProps?: {
        checkbox?: CheckboxProps;
    };
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
