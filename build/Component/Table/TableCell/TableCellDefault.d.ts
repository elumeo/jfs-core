import React from 'react';
export declare const cellStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"cellContent">;
export declare type ICellRendererDefaultProps = {
    cellData: any;
    rowHeight: number;
    isNumeric?: boolean;
};
declare const _default: React.MemoExoticComponent<({ cellData, rowHeight, isNumeric }: ICellRendererDefaultProps) => JSX.Element>;
export default _default;
