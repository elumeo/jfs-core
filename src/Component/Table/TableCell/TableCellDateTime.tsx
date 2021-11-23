import React, { memo, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';
import TableCellRoot from 'Component/Table/TableCell/TableCellRoot';

export type TableCellDateTimeProps = {
  cellData: string;
  noValueElement?: ReactNode;
}

const TableCellDateTime = ({cellData = null, noValueElement = '-'}: TableCellDateTimeProps) => {
  const {formatDate, formatTime} = useIntl();
  return <TableCellRoot>
    {cellData === null && noValueElement}
    {cellData !== null && <>
      {formatDate(cellData, DateTime.getDefaultDateFormatOptions())}<br/>
      {formatTime(cellData, DateTime.getDefaultTimeFormatOptions(true))}
    </>}
  </TableCellRoot>;
}

export default memo(TableCellDateTime);
