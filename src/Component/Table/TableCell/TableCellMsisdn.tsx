import React, { memo } from 'react';
import FormattedMsisdn from 'Component/FormattedMsisdn';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoadingContent';
import TableCellRoot, { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';

export type TableCellMsisdnProps = Partial<TableCellRootProps> & {
  cellData: string;
  isLoading: boolean;
};

const TableCellMsisdn = ({ cellData, isLoading = false, ...rest }: TableCellMsisdnProps) => {
  return <TableCellRoot {...rest} isNumeric={false}>
    {isLoading === false && cellData && <span style={ellipsesStyle}><FormattedMsisdn msisdn={cellData} /></span> || '-'}
    {isLoading && <TableCellLoading />}
  </TableCellRoot>;
};

export default memo(TableCellMsisdn);
