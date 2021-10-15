import React, { memo, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';
import TableCellBase from 'Component/Table/TableCell/TableCellBase';

export type TableCellDateTimeRangeProps = {
  cellData: DateTimeRangeCellProps;
  noValueElement?: ReactNode;
}

const TableCellDateTimeRange = ({cellData = null, noValueElement = '-'}: TableCellDateTimeRangeProps) => {
  const {formatDate, formatTime} = useIntl();

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
  return <TableCellBase>
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
  </TableCellBase>;
}

export default memo(TableCellDateTimeRange);
