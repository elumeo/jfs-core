import React, {ReactNode} from 'react';
import {useIntl} from 'react-intl';
import {DateTime} from 'Utilities/Format';
import {DateTimeRangeCellProps} from 'Types/Table/DateTimeRangeCellProps';
import {TableCellProps} from '@mui/material';
import Root from 'Component/Table/TableCell/Root';

export type Props = Partial<TableCellProps> & {
  value: DateTimeRangeCellProps;
  noValueElement?: ReactNode;
}

const DateTimeRange: React.FC<Props> = ({
                                          value = null,
                                          noValueElement = '-',
                                          ...rest
                                        }) => {
  const {formatDate, formatTime} = useIntl();

  let startDate: string;
  let startTime: string;
  let endDate: string;
  let endTime: string;
  let hasSameDate: boolean;

  if (value) {
    startDate = formatDate(value.start, DateTime.getDefaultDateFormatOptions());
    startTime = formatTime(value.start, DateTime.getDefaultTimeFormatOptions(true));
    endDate = formatDate(value.end, DateTime.getDefaultDateFormatOptions());
    endTime = formatTime(value.end, DateTime.getDefaultTimeFormatOptions(true));
    hasSameDate = startDate === endDate;
  }
  return <Root {...rest}>
    {(value === null || value === undefined || value.start === null) && noValueElement}
    {value && value.start !== null && <>
      {hasSameDate && <>
        {startDate}<br/>
        {startTime} - {endTime}
      </>}
      {hasSameDate === false && <>
        {startDate} {startTime} -<br/>
        {endDate} {endTime}
      </>}
    </>}
  </Root>;
};

export default DateTimeRange;
