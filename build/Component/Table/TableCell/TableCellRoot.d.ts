import React from 'react';
import { TableCellProps } from '@mui/material';
export type TableCellRootProps = TableCellProps & {
    isNumeric?: boolean;
};
declare const TableCellRoot: React.FC<TableCellRootProps>;
export default TableCellRoot;
