import React, { memo, ReactNode } from 'react';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { globalStyles } from 'Component/Table/VirtualizedTable';
import { TableCellLoading } from 'Component/Table/TableCell';

export const cellStyles = makeStyles(() =>
  createStyles({
    wrapContent: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    }
  })
);

export type TableCellDefaultProps = {
  cellData: ReactNode;
  isLoading?: boolean;
  isNumeric?: boolean;
  wrapContent?: boolean;
};

const TableCellDefault = ({ cellData, isNumeric = false, wrapContent = true, isLoading = false }: TableCellDefaultProps) => {
  const classes = cellStyles();
  const globalClasses = globalStyles();
  return <>
    {isLoading === false && <TableCell
      component={'div'}
      className={clsx(globalClasses.tableCell, globalClasses.flexContainer)}
      variant={'body'}
      style={{ height: '100%' }}
      align={isNumeric ? 'right' : 'left'}
    >
      <span className={clsx({ [classes.wrapContent]: wrapContent })}>{cellData}</span>
    </TableCell>}
    {isLoading && <TableCellLoading />}
  </>;
};
export default memo(TableCellDefault);
