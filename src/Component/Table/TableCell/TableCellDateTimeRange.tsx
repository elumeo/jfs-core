import React, { memo, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';
import TableCellRoot, { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';

export type TableCellDateTimeRangeProps = Partial<TableCellRootProps> & {
  cellData: DateTimeRangeCellProps;
  noValueElement?: ReactNode;
  additional?: ReactNode;
}

const TableCellDateTimeRange = ({ cellData = null, additional = null, noValueElement = '-', ...rest }: TableCellDateTimeRangeProps) => {
  const { formatDate, formatTime } = useIntl();

  let startDate: string;
  let startTime: string;
  let endDate: string;
  let endTime: string;
  let hasSameDate: boolean;

  if (cellData) {
    startDate = formatDate(cellData.start, DateTime.getDefaultDateFormatOptions());
    startTime = formatTime(cellData.start, DateTime.getDefaultTimeFormatOptions(true));
    endDate = formatDate(cellData.end, DateTime.getDefaultDateFormatOptions());
    endTime = formatTime(cellData.end, DateTime.getDefaultTimeFormatOptions(true));
    hasSameDate = startDate === endDate;
  }
  return <TableCellRoot {...rest} isNumeric={false}>
    {(cellData === null || cellData === undefined || cellData.start === null) && noValueElement}
    {cellData && cellData.start !== null && <>
      {hasSameDate && <>
        {startDate}<br />
        {startTime} - {endTime}
      </>}
      {hasSameDate === false && <>
        {startDate} {startTime} -<br />
        {endDate} {endTime}
      </>}
    </>}
    {additional}
  </TableCellRoot>;
};

export default memo(TableCellDateTimeRange);
