import React, { memo } from 'react';
import { TableCellProps } from 'react-virtualized';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { virtualizedGlobalStyles } from 'Component/Table/VirtualizedTable';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoading';

export const cellStyles = makeStyles(() => createStyles({
  cellContent: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
}));

export type ICellRendererDefaultProps = {
  cellProps: TableCellProps;
  rowHeight: number;
}

const TableCellDefault = ({cellProps, rowHeight}: ICellRendererDefaultProps) => {
  const cellClasses = cellStyles();
  const globalStyles = virtualizedGlobalStyles();
  return (cellProps.rowData && <TableCell
      component={'div'}
      className={clsx(globalStyles.tableCell, globalStyles.flexContainer)}
      variant={'body'}
      style={{height: rowHeight}}
    ><span className={cellClasses.cellContent}>{cellProps.cellData}</span></TableCell>) || <TableCellLoading rowHeight={rowHeight}/>;
}
export default memo(TableCellDefault);
