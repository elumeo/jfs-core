import React from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export type TableCellDateTimeProps = Partial<TableCellRootProps> & {
    cellData: Date | string;
    noValueElement?: React.ReactNode;
    asTwoLines?: boolean;
};
declare const TableCellDateTime: ({ cellData, noValueElement, asTwoLines, ...rest }: TableCellDateTimeProps) => JSX.Element;
export default TableCellDateTime;
