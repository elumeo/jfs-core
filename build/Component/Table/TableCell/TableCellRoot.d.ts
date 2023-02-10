import React from 'react';
import { SxProps } from '@mui/material';
export type TableCellRootProps = {
    children: React.ReactNode;
    isNumeric?: boolean;
    height?: number | string;
    sx?: SxProps;
};
declare const TableCellRoot: React.FC<TableCellRootProps>;
export default TableCellRoot;
