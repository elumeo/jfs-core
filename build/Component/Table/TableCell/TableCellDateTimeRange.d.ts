import React, { ReactNode } from 'react';
import { DateTimeRangeCellProps } from '../../../Types/Table/DateTimeRangeCellProps';
export declare type TableCellDateTimeRangeProps = {
    cellData: DateTimeRangeCellProps;
    noValueElement?: ReactNode;
};
declare const _default: React.MemoExoticComponent<({ cellData, noValueElement }: TableCellDateTimeRangeProps) => JSX.Element>;
export default _default;
