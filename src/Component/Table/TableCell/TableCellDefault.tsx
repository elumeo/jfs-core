import React, { memo, ReactNode } from 'react';
import { TableCell, Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { globalStyles } from 'Component/Table/VirtualizedTable';
import { TableCellLoading } from 'Component/Table/TableCell';

export const cellStyles = makeStyles<Theme, TableCellStyleProps>(() =>
  createStyles({
    contentEllipses: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },
    contentEllipsesLines: {
      overflow: 'hidden',
      whiteSpace: 'normal',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': props => props.contentEllipseLines ?? 4,
      display: '-webkit-box'
    }
  })
);

export enum ContentEllipseMode {
  Normal = 'normal',
  Lines = 'lines'
}

export type TableCellStyleProps = {
  contentEllipseLines?: number;
}

export type TableCellDefaultProps = {
  cellData: ReactNode;
  isLoading?: boolean;
  isNumeric?: boolean;
  contentEllipseMode?: ContentEllipseMode;
  contentEllipseLines?: number;
};

const TableCellDefault = ({ cellData, isNumeric = false, contentEllipseMode = ContentEllipseMode.Normal, contentEllipseLines = 4, isLoading = false }: TableCellDefaultProps) => {
  const classes = cellStyles({ contentEllipseLines });
  const globalClasses = globalStyles();
  return <>
    {isLoading === false && <TableCell
      component={'div'}
      className={clsx(globalClasses.tableCell, globalClasses.flexContainer)}
      variant={'body'}
      style={{ height: '100%' }}
      align={isNumeric ? 'right' : 'left'}
    >
      <span className={clsx({
        [classes.contentEllipses]: contentEllipseMode === ContentEllipseMode.Normal,
        [classes.contentEllipsesLines]: contentEllipseMode === ContentEllipseMode.Lines,
      })}>{cellData}</span>
    </TableCell>}
    {isLoading && <TableCellLoading />}
  </>;
};
export default memo(TableCellDefault);
