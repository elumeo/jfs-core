import React from 'react';
import { SortDirection, SxProps, TableCellProps, Theme } from '@mui/material';
export declare const sortingStyles: SxProps<Theme>;
export type Props = Omit<TableCellProps, 'onClick'> & {
    height?: number;
    isNumeric?: boolean;
    disableSort?: boolean;
    sortBy?: string;
    sortDirection?: SortDirection;
    label?: React.ReactNode;
    dataKey: string;
    onClick?: (sortBy: string, sortDirection: SortDirection) => void;
};
declare const Default: React.FC<Props>;
export default Default;
