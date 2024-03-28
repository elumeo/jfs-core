import { ColumnProps, Table, TableProps, AutoSizerProps } from 'react-virtualized';
import React from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
export declare const visuallyHiddenStyle: CSSProperties;
export declare const flexContainerStyles: CSSProperties;
export declare const ellipsesStyle: CSSProperties;
export declare const noOutlineStyles: CSSProperties;
export declare const rowStyles: CSSProperties;
export declare const rowClickStyles: CSSProperties;
export declare const rowNoClickStyles: CSSProperties;
export declare const columnHeaderStyles: CSSProperties;
export type ColumnData = Omit<ColumnProps, 'width'> & {
    numeric?: boolean;
    width?: number | ((fullWidth: number) => number);
};
export type VirtualizedTableProps = Partial<TableProps> & {
    columns: ColumnData[];
    showRowHoverHighlight?: boolean;
    headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
    onResize?: AutoSizerProps['onResize'];
    rowHeight?: TableProps['rowHeight'];
};
declare const VirtualizedTable: React.ForwardRefExoticComponent<Omit<VirtualizedTableProps, "ref"> & React.RefAttributes<Table>>;
export default VirtualizedTable;
