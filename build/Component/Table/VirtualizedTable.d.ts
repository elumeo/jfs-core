import { ColumnProps, Table, TableProps } from 'react-virtualized';
import React from 'react';
export declare const virtualizedGlobalStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"table" | "flexContainer" | "tableGrid" | "tableRow" | "tableRowHover" | "tableCell" | "noClick" | "visuallyHidden">;
declare type ColumnData = ColumnProps & {
    numeric?: boolean;
};
declare type VirtualizedTableProps = TableProps & {
    columns: ColumnData[];
    rowHeight?: number;
    headerHeight?: number;
    showRowHoverHighlight?: boolean;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<VirtualizedTableProps, string | number> & React.RefAttributes<Table>>>;
export default _default;
