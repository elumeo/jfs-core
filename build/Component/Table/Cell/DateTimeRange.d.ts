import React, { ReactNode } from 'react';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';
import { TableCellProps } from '@mui/material';
export declare type Props = Partial<TableCellProps> & {
    value: DateTimeRangeCellProps;
    noValueElement?: ReactNode;
};
declare const DateTimeRange: React.FC<Props>;
export default DateTimeRange;
