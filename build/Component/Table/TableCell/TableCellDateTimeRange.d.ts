import React, { ReactNode } from 'react';
import { DateTimeRangeCellProps } from '../../../Types/Table/DateTimeRangeCellProps';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export type TableCellDateTimeRangeProps = Partial<TableCellRootProps> & {
    cellData: DateTimeRangeCellProps;
    noValueElement?: ReactNode;
};
declare const TableCellDateTimeRange: React.FC<TableCellDateTimeRangeProps>;
export default TableCellDateTimeRange;
