import React, { ReactNode } from 'react';
import { DateTimeRangeCellProps } from '../../../Types/Table/DateTimeRangeCellProps';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export declare type TableCellDateTimeRangeProps = Partial<TableCellRootProps> & {
    cellData: DateTimeRangeCellProps;
    noValueElement?: ReactNode;
};
declare const _default: React.MemoExoticComponent<({ cellData, noValueElement, ...rest }: TableCellDateTimeRangeProps) => JSX.Element>;
export default _default;
