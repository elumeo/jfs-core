import React, { memo } from 'react';
import { TableCellProps } from 'react-virtualized';
import { TableCell } from '@material-ui/core';
import clsx from 'clsx';

import FormattedMsisdn from 'Component/FormattedMsisdn';
import { virtualizedGlobalStyles } from 'Component/Table/VirtualizedTable';
import { cellStyles } from 'Component/Table/TableCell/TableCellDefault';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoading';

export type TableCellMsisdnProps = {
  cellProps: TableCellProps;
  rowHeight: number;
}

const TableCellMsisdn = ({cellProps, rowHeight}: TableCellMsisdnProps) => {
  const cellClasses = cellStyles();
  const globalStyles = virtualizedGlobalStyles();

  return (cellProps.cellData !== null && <TableCell
      component={'div'}
      className={clsx(globalStyles.tableCell, globalStyles.flexContainer)}
      variant={'body'}
      style={{height: rowHeight}}
    ><span className={cellClasses.cellContent}><FormattedMsisdn msisdn={cellProps.cellData}/></span></TableCell>) ||
    <TableCellLoading rowHeight={rowHeight}/>;
}

export default memo(TableCellMsisdn);
