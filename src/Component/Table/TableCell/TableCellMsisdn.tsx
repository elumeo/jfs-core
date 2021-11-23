import React, { memo } from 'react';
import { TableCellProps } from 'react-virtualized';
import FormattedMsisdn from 'Component/FormattedMsisdn';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoadingContent';
import TableCellRoot from 'Component/Table/TableCell/TableCellRoot';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';

export type TableCellMsisdnProps = {
  cellProps: TableCellProps;
  rowHeight: number;
  isLoading?: boolean;
};

const TableCellMsisdn = ({ cellProps, rowHeight, isLoading = false }: TableCellMsisdnProps) => {
  return <TableCellRoot rowHeight={rowHeight}>
    {isLoading === false && cellProps.cellData && <span style={ellipsesStyle}><FormattedMsisdn msisdn={cellProps.cellData} /></span> || '-'}
    {isLoading && <TableCellLoading />}
  </TableCellRoot>;
};

export default memo(TableCellMsisdn);
