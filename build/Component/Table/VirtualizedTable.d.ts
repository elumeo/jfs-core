import { ColumnProps, Index, Table, TableProps } from 'react-virtualized';
import React from 'react';
import { Size } from 'react-virtualized/dist/es/AutoSizer';
export declare const globalStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"flexContainer" | "tableCell">;
export declare const useStyles: (props: VirtualizedTableProps) => import("@material-ui/styles").ClassNameMap<string>;
export declare type ColumnData = ColumnProps & {
    numeric?: boolean;
    width: (fullWidth: number) => number;
};
export declare type VirtualizedTableProps = TableProps & {
    onResize?: (info: Size) => unknown;
    columns: ColumnData[];
    rowHeight?: number | ((params: Index) => number);
    headerHeight?: number;
    showRowHoverHighlight?: boolean;
    headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<VirtualizedTableProps, keyof import("react-virtualized/dist/es/Grid").GridCoreProps> & React.RefAttributes<Table>>>;
export default _default;
