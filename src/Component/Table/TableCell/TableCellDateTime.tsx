import React, { memo, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'Utilities/Format';
import TableCellRoot, { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';

export type TableCellDateTimeProps = Partial<TableCellRootProps> & {
  cellData: Date | string;
  noValueElement?: ReactNode;
}

const TableCellDateTime = ({ cellData = null, noValueElement = '-', ...rest }: TableCellDateTimeProps) => {
  const { formatDate, formatTime } = useIntl();
  return <TableCellRoot {...rest} isNumeric={false}>
    {(cellData === null || cellData === undefined) && noValueElement}
    {cellData && <>
      {formatDate(cellData, DateTime.getDefaultDateFormatOptions())}<br />
      {formatTime(cellData, DateTime.getDefaultTimeFormatOptions(true))}
    </>}
  </TableCellRoot>;
};

export default memo(TableCellDateTime);
