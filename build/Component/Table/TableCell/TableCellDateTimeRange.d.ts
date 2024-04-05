import React, { ReactNode } from 'react';
import { DateTimeRangeCellProps } from '../../../Types/Table/DateTimeRangeCellProps';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export type TableCellDateTimeRangeProps = Partial<TableCellRootProps> & {
    cellData: DateTimeRangeCellProps;
    noValueElement?: ReactNode;
    additional?: ReactNode;
};
declare const _default: React.MemoExoticComponent<({ cellData, additional, noValueElement, ...rest }: TableCellDateTimeRangeProps) => React.JSX.Element>;
export default _default;
