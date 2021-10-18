import React, { ReactNode } from 'react';
export declare enum ContentEllipseMode {
    None = "none",
    Normal = "normal",
    Lines = "lines"
}
export declare type TableCellDefaultBaseProps = {
    cellData: ReactNode;
    isLoading?: boolean;
    isNumeric?: boolean;
    contentEllipseMode?: ContentEllipseMode;
    contentEllipseLines?: number;
    className?: string;
};
declare const _default: React.MemoExoticComponent<({ cellData, isNumeric, className, contentEllipseMode, isLoading }: TableCellDefaultBaseProps) => JSX.Element>;
export default _default;
