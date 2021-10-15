import React, { memo, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';
import TableCellBase from 'Component/Table/TableCell/TableCellBase';

export type TableCellDateTimeProps = {
  cellData: string;
  noValueElement?: ReactNode;
}

const TableCellDateTime = ({cellData = null, noValueElement = '-'}: TableCellDateTimeProps) => {
  const {formatDate, formatTime} = useIntl();
  return <TableCellBase>
    {cellData === null && noValueElement}
    {cellData !== null && <>
      {formatDate(cellData, DateTime.getDefaultDateFormatOptions())}<br/>
      {formatTime(cellData, DateTime.getDefaultTimeFormatOptions(true))}
    </>}
  </TableCellBase>;
}

export default memo(TableCellDateTime);
