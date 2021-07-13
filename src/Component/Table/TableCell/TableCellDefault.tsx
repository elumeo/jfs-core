import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { virtualizedGlobalStyles } from 'Component/Table/VirtualizedTable';
import { TableCellLoading } from 'Component/Table/TableCell';

export const cellStyles = makeStyles(() => createStyles({
  cellContent: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
}));

export type ICellRendererDefaultProps = {
  cellData: any;
  isNumeric?: boolean;
}

const TableCellDefault = ({cellData, isNumeric = false}: ICellRendererDefaultProps) => {
  const cellClasses = cellStyles();
  const globalStyles = virtualizedGlobalStyles();
  return (cellData && <TableCell
      component={'div'}
      className={clsx(
        globalStyles.tableCell,
        globalStyles.flexContainer,
      )}
      variant={'body'}
      style={{height: '100%'}}
      align={isNumeric ? 'right' : 'left'}
    ><span className={cellClasses.cellContent}>{cellData}</span></TableCell>) || <TableCellLoading />;
}
export default memo(TableCellDefault);
