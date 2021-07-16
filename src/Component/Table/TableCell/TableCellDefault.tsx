import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { globalStyles } from 'Component/Table/VirtualizedTable';
import { TableCellLoading } from 'Component/Table/TableCell';

export const cellStyles = makeStyles(() => createStyles({
  cellContent: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
}));

export type TableCellDefaultProps = {
  cellData: any;
  isNumeric?: boolean;
}

const TableCellDefault = ({ cellData, isNumeric = false }: TableCellDefaultProps) => {
  const classes = cellStyles();
  const globalClasses = globalStyles();
  return (cellData && <TableCell
    component={'div'}
    className={clsx(
      globalClasses.tableCell,
      globalClasses.flexContainer
    )}
    variant={'body'}
    style={{ height: '100%' }}
    align={isNumeric ? 'right' : 'left'}
  ><span className={classes.cellContent}>{cellData}</span></TableCell>) || <TableCellLoading />;
};
export default memo(TableCellDefault);
