import React, { ReactNode } from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export declare enum ContentEllipseMode {
    None = "none",
    Normal = "normal",
    Lines = "lines"
}
export declare type TableCellDefaultProps = Partial<TableCellRootProps> & {
    cellData: ReactNode;
    isLoading?: boolean;
    contentEllipseMode?: ContentEllipseMode;
    contentEllipseLines?: number;
};
declare const _default: React.MemoExoticComponent<({ cellData, contentEllipseMode, contentEllipseLines, isLoading, ...rest }: TableCellDefaultProps) => JSX.Element>;
export default _default;
