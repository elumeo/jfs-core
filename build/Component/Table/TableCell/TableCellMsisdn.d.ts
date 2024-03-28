import React from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export type TableCellMsisdnProps = Partial<TableCellRootProps> & {
    cellData: string;
    isLoading?: boolean;
};
declare const _default: React.MemoExoticComponent<({ cellData, isLoading, ...rest }: TableCellMsisdnProps) => React.JSX.Element>;
export default _default;
