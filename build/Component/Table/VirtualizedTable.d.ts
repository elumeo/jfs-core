import { ColumnProps, Table, TableProps } from 'react-virtualized';
import React from 'react';
export declare const globalStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"flexContainer" | "tableCell">;
export declare const useStyles: (props: VirtualizedTableProps) => import("@material-ui/styles").ClassNameMap<string>;
export declare type ColumnData = ColumnProps & {
    numeric?: boolean;
};
export declare type VirtualizedTableProps = TableProps & {
    columns: ColumnData[];
    rowHeight?: number;
    headerHeight?: number;
    showRowHoverHighlight?: boolean;
    headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<VirtualizedTableProps, string | number> & React.RefAttributes<Table>>>;
export default _default;
