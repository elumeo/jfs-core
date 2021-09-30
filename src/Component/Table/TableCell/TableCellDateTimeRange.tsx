import { TableCell } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import clsx from 'clsx';
import { globalStyles } from '../VirtualizedTable';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';

export type TableCellDateTimeRangeProps = {
  cellData: DateTimeRangeCellProps;
  noValueElement?: ReactNode;
}

const TableCellDateTimeRange = ({cellData = null, noValueElement = '-'}: TableCellDateTimeRangeProps) => {
  const {formatDate, formatTime} = useIntl();
  const globalClasses = globalStyles();

  let startDate: string;
  let startTime: string;
  let endDate: string;
  let endTime: string;
  let hasSameDate: boolean;

  if (cellData !== null) {
    startDate = formatDate(cellData.start, DateTime.getDefaultDateFormatOptions());
    startTime = formatTime(cellData.start, DateTime.getDefaultTimeFormatOptions(true));
    endDate = formatDate(cellData.end, DateTime.getDefaultDateFormatOptions());
    endTime = formatTime(cellData.end, DateTime.getDefaultTimeFormatOptions(true));
    hasSameDate = startDate === endDate;
  }
  return <TableCell
    component={'div'}
    className={clsx(globalClasses.tableCell, globalClasses.flexContainer)}
    variant={'body'}
    style={{height: '100%'}}
    align={'left'}
  >
    {(cellData === null || cellData.start === null) && noValueElement}
    {cellData !== null && cellData.start !== null && <>
      {hasSameDate && <>
        {startDate}<br />
        {startTime} - {endTime}
      </>}
      {hasSameDate === false && <>
        {startDate} {startTime}<br />
        {endDate} {endTime}
      </>}
    </>}
  </TableCell>;
}

export default memo(TableCellDateTimeRange);
