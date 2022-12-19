import React, { ReactNode } from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export type TableCellDateTimeProps = Partial<TableCellRootProps> & {
    cellData: Date | string;
    noValueElement?: ReactNode;
    asTwoLines?: boolean;
};
declare const _default: React.MemoExoticComponent<({ cellData, noValueElement, asTwoLines, ...rest }: TableCellDateTimeProps) => JSX.Element>;
export default _default;
