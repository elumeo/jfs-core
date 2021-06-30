import React from 'react';
import { TableCellProps } from 'react-virtualized';
export declare const cellStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"cellContent">;
export declare type ICellRendererDefaultProps = {
    cellProps: TableCellProps;
    rowHeight: number;
};
declare const _default: React.MemoExoticComponent<({ cellProps, rowHeight }: ICellRendererDefaultProps) => JSX.Element>;
export default _default;
