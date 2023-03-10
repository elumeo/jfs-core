import React from 'react';
import { SortDirection, TableCellProps } from '@mui/material';
export type Props = TableCellProps & {
    height?: number;
    isNumeric?: boolean;
    disableSort?: boolean;
    sortBy?: string;
    sortDirection?: SortDirection;
    label?: React.ReactNode;
    dataKey: string;
};
declare const Default: React.FC<Props>;
export default Default;
