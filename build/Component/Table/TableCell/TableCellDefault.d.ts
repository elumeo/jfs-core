import React from 'react';
import { RowMouseEventHandlerParams } from 'react-virtualized/dist/es/Table';
export declare const cellStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"cellContent">;
export declare type ICellRendererDefaultProps = {
    cellData: any;
    rowHeight: number;
    onRowClick?: (info: RowMouseEventHandlerParams) => void;
    isNumeric?: boolean;
};
declare const _default: React.MemoExoticComponent<({ cellData, rowHeight, onRowClick, isNumeric }: ICellRendererDefaultProps) => JSX.Element>;
export default _default;
