import React, { memo } from 'react';
import {useIntl} from 'react-intl';
import {DateTime as DateTimeUtility} from 'Utilities/Format';
import Root from 'Component/Table/Cell/Root';
import {TableCellProps} from '@mui/material';

export type Props = Partial<TableCellProps> & {
  value: Date | string;
  noValueElement?: React.ReactNode;
  asTwoLines?: boolean;
  displayTime: boolean;
}

const DateTime = ({value = null, noValueElement = '-', asTwoLines = true, displayTime = true, ...rest}: Props) => {
  const {formatDate, formatTime} = useIntl();
  return <Root {...rest}>
    {(value === null || value === undefined) && noValueElement}
    {value && <>
      {formatDate(value, DateTimeUtility.getDefaultDateFormatOptions())}{asTwoLines && <br/>}{asTwoLines === false && ' '}
      {displayTime && formatTime(value, DateTimeUtility.getDefaultTimeFormatOptions(true))}
    </>}
  </Root>;
};

export default memo(DateTime);
