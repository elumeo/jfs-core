import React, { ReactNode } from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export declare type TableCellDateTimeProps = Partial<TableCellRootProps> & {
    cellData: Date | string;
    noValueElement?: ReactNode;
};
declare const _default: React.MemoExoticComponent<({ cellData, noValueElement, ...rest }: TableCellDateTimeProps) => JSX.Element>;
export default _default;
