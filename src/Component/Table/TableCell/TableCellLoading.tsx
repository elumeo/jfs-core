import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';

import { virtualizedGlobalStyles } from 'Component/Table/VirtualizedTable';

export type ICellRendererDefaultProps = {
  rowHeight: number;
}

const TableCellLoading = ({rowHeight}: ICellRendererDefaultProps) => {
  const globalStyles = virtualizedGlobalStyles();
  return <TableCell
    component={'div'}
    className={clsx(globalStyles.tableCell, globalStyles.flexContainer)}
    variant={'body'}
    style={{height: rowHeight}}
  ><Skeleton variant='text' width={'100%'} animation={'wave'} /></TableCell>;
}

export default memo(TableCellLoading);
