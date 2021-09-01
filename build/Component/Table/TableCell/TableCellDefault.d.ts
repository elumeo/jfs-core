import React, { ReactNode } from 'react';
export declare const cellStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"wrapContent">;
export declare type TableCellDefaultProps = {
    cellData: ReactNode;
    isLoading?: boolean;
    isNumeric?: boolean;
    wrapContent?: boolean;
};
declare const _default: React.MemoExoticComponent<({ cellData, isNumeric, wrapContent, isLoading }: TableCellDefaultProps) => JSX.Element>;
export default _default;
