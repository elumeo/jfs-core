import { ColumnProps, Index, Table, TableProps } from 'react-virtualized';
import React from 'react';
import { Size } from 'react-virtualized/dist/es/AutoSizer';
export interface ColumnData extends ColumnProps {
    numeric?: boolean;
    width?: number | ((fullWidth: number) => number);
}
export declare type VirtualizedTableBaseProps = Partial<TableProps> & {
    onResize?: (info: Size) => unknown;
    columns: ColumnData[];
    rowHeight?: number | ((params: Index) => number);
    showRowHoverHighlight?: boolean;
    headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<VirtualizedTableBaseProps, keyof import("react-virtualized/dist/es/Grid").GridCoreProps> & React.RefAttributes<Table>>>;
export default _default;
