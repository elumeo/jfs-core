import React from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export type TableCellMsisdnProps = Partial<TableCellRootProps> & {
    cellData: string;
    isLoading?: boolean;
};
declare const TableCellMsisdn: React.FC<TableCellMsisdnProps>;
export default TableCellMsisdn;
