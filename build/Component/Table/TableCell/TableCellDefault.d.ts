import React, { ReactNode } from 'react';
export declare const cellStyles: (props: TableCellStyleProps) => import("@material-ui/styles").ClassNameMap<string>;
export declare enum ContentEllipseMode {
    Normal = "normal",
    Lines = "lines"
}
export declare type TableCellStyleProps = {
    contentEllipseLines?: number;
};
export declare type TableCellDefaultProps = {
    cellData: ReactNode;
    isLoading?: boolean;
    isNumeric?: boolean;
    contentEllipseMode?: ContentEllipseMode;
    contentEllipseLines?: number;
};
declare const _default: React.MemoExoticComponent<({ cellData, isNumeric, contentEllipseMode, contentEllipseLines, isLoading }: TableCellDefaultProps) => JSX.Element>;
export default _default;
