import React, { memo } from 'react';
import { TableCellProps } from 'react-virtualized';
import { TableCell } from '@material-ui/core';
import clsx from 'clsx';

import FormattedMsisdn from 'Component/FormattedMsisdn';
import { globalStyles } from 'Component/Table/VirtualizedTable';
import { cellStyles } from 'Component/Table/TableCell/TableCellDefault';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoading';

export type TableCellMsisdnProps = {
  cellProps: TableCellProps;
  rowHeight: number;
}

const TableCellMsisdn = ({cellProps, rowHeight}: TableCellMsisdnProps) => {
  const classes = cellStyles();
  const globalClasses = globalStyles();

  return (cellProps.cellData !== null && <TableCell
      component={'div'}
      className={clsx(globalClasses.tableCell, globalClasses.flexContainer)}
      variant={'body'}
      style={{height: rowHeight}}
    ><span className={classes.cellContent}><FormattedMsisdn msisdn={cellProps.cellData}/></span></TableCell>) ||
    <TableCellLoading />;
}

export default memo(TableCellMsisdn);
