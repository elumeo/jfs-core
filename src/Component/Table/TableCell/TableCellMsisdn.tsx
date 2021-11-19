import React, { memo } from 'react';
import { TableCellProps } from 'react-virtualized';
import FormattedMsisdn from 'Component/FormattedMsisdn';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoadingContent';
import TableCellBase from 'Component/Table/TableCell/TableCellRootBase';

export type TableCellMsisdnProps = {
  cellProps: TableCellProps;
  rowHeight: number;
  isLoading?: boolean;
};

const TableCellMsisdn = ({ cellProps, rowHeight, isLoading = false }: TableCellMsisdnProps) => {
  return <>
    <TableCellBase rowHeight={rowHeight}>
      {isLoading === false && cellProps.cellData && <span className={'virtualized-table__content-ellipses'}><FormattedMsisdn msisdn={cellProps.cellData} /></span> || '-'}
      {isLoading && <TableCellLoading />}
    </TableCellBase>
  </>;
};

export default memo(TableCellMsisdn);
