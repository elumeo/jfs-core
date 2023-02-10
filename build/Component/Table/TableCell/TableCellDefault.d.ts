import React from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export declare enum ContentEllipseMode {
    None = "none",
    Normal = "normal",
    Lines = "lines"
}
export type TableCellDefaultProps = Partial<TableCellRootProps> & {
    cellData: React.ReactNode;
    isLoading?: boolean;
    contentEllipseMode?: ContentEllipseMode;
    contentEllipseLines?: number;
    overflow?: 'hidden' | 'visible';
};
declare const TableCellDefault: React.FC<TableCellDefaultProps>;
export default TableCellDefault;
