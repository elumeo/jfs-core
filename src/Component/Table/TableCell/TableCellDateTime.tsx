import { TableCell } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import clsx from 'clsx';
import { globalStyles } from '../VirtualizedTable';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';

export type TableCellDateTimeProps = {
  cellData: string;
  noValueElement?: ReactNode;
}

const TableCellDateTime = ({cellData = null, noValueElement = '-'}: TableCellDateTimeProps) => {
  const {formatDate, formatTime} = useIntl();
  const globalClasses = globalStyles();
  return <TableCell
    component={'div'}
    className={clsx(globalClasses.tableCell, globalClasses.flexContainer)}
    variant={'body'}
    style={{height: '100%'}}
    align={'left'}
  >
    {cellData === null && noValueElement}
    {cellData !== null && <>
      {formatDate(cellData, DateTime.getDefaultDateFormatOptions())}<br/>
      {formatTime(cellData, DateTime.getDefaultTimeFormatOptions(true))}
    </>}
  </TableCell>;
}

export default memo(TableCellDateTime);
