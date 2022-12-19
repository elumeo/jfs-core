import React, { ReactNode } from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export declare enum ContentEllipseMode {
    None = "none",
    Normal = "normal",
    Lines = "lines"
}
export type TableCellDefaultProps = Partial<TableCellRootProps> & {
    cellData: ReactNode;
    isLoading?: boolean;
    contentEllipseMode?: ContentEllipseMode;
    contentEllipseLines?: number;
    overflow?: 'hidden' | 'visible';
};
declare const _default: React.MemoExoticComponent<({ cellData, overflow, contentEllipseMode, contentEllipseLines, isLoading, ...rest }: TableCellDefaultProps) => JSX.Element>;
export default _default;
