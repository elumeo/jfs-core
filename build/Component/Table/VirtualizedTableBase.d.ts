import { ColumnProps, Table, TableProps, AutoSizerProps } from 'react-virtualized';
import React from 'react';
export interface ColumnData extends ColumnProps {
    numeric?: boolean;
    width?: number | ((fullWidth: number) => number);
}
export declare type VirtualizedTableBaseProps = Partial<TableProps> & {
    columns: ColumnData[];
    showRowHoverHighlight?: boolean;
    headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
    onResize?: AutoSizerProps['onResize'];
    rowHeight?: TableProps['rowHeight'];
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Pick<VirtualizedTableBaseProps, keyof import("react-virtualized/dist/es/Grid").GridCoreProps> & React.RefAttributes<Table>>>;
export default _default;
