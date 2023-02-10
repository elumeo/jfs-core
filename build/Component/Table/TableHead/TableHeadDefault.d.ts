import React from 'react';
import { SortDirection, TableCellProps } from '@mui/material';
export type TableHeadDefaultProps = TableCellProps & {
    height?: number;
    isNumeric?: boolean;
    disableSort?: boolean;
    sortBy?: string;
    sortDirection?: SortDirection;
    label?: React.ReactNode;
    dataKey: string;
};
declare const TableHeadDefault: React.FC<TableHeadDefaultProps>;
export default TableHeadDefault;
