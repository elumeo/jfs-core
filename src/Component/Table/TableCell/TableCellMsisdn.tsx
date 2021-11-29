import React, { memo } from 'react';
import FormattedMsisdn from 'Component/FormattedMsisdn';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoadingContent';
import TableCellRoot from 'Component/Table/TableCell/TableCellRoot';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';

export type TableCellMsisdnProps = {
  cellData: string;
  rowHeight: number;
  isLoading?: boolean;
};

const TableCellMsisdn = ({ cellData, rowHeight, isLoading = false }: TableCellMsisdnProps) => {
  return <TableCellRoot rowHeight={rowHeight}>
    {isLoading === false && cellData && <span style={ellipsesStyle}><FormattedMsisdn msisdn={cellData} /></span> || '-'}
    {isLoading && <TableCellLoading />}
  </TableCellRoot>;
};

export default memo(TableCellMsisdn);
