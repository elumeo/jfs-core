import React, { memo } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';
import clsx from 'clsx';

import { globalStyles } from 'Component/Table/VirtualizedTable';
import { SortDirectionType, TableHeaderProps } from 'react-virtualized';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => createStyles({
  noClick: {
    cursor: 'initial'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
}));

export type TableHeadDefaultProps = {
  headerProps: TableHeaderProps;
}

const TableHeadDefault = ({headerProps}: TableHeadDefaultProps) => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  const mapSortDirection = (sortDirection: SortDirectionType) => sortDirection === 'ASC' ? 'asc' : 'desc';
  return headerProps && <TableCell
    component={'div'}
    className={clsx(globalClasses.tableCell, globalClasses.flexContainer, classes.noClick)}
    variant={'head'}
    style={{ height: headerProps.columnData.headerHeight }}
    align={headerProps.columnData.numeric || false ? 'right' : 'left'}>
    {headerProps.disableSort !== true && <TableSortLabel
      active={headerProps.sortBy === headerProps.dataKey}
      direction={headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc'}>
      {headerProps.label}
      {headerProps.sortBy === headerProps.dataKey ? (
        <span className={classes.visuallyHidden}>{headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>) : null}
    </TableSortLabel>}
    {headerProps.disableSort && <span>{headerProps.label}</span>}
  </TableCell>;
}

export default memo(TableHeadDefault);
