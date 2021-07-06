import { ColumnProps, TableProps } from 'react-virtualized/dist/es/Table';
import { Table } from 'react-virtualized';
import React from 'react';
export declare const virtualizedGlobalStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"table" | "flexContainer" | "tableGrid" | "tableRow" | "tableRowHover" | "tableCell" | "noClick" | "visuallyHidden">;
declare type ColumnData = ColumnProps & {
    numeric?: boolean;
};
declare type VirtualizedTableProps = TableProps & {
    size: 'small' | 'medium';
    columns: ColumnData[];
    rowHeight?: number;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<VirtualizedTableProps, string | number> & React.RefAttributes<Table>>>;
export default _default;
