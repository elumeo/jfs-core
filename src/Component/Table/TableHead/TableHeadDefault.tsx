import React, { memo, ReactNode, useMemo } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';
import { SortDirectionType } from 'react-virtualized';
import { flexContainerStyles, rowNoClickStyles, visuallyHiddenStyle } from 'Component/Table/VirtualizedTable';
import { Theme, useTheme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type TableHeadDefaultProps = {
  height?: number;
  isNumeric?: boolean;
  disableSort?: boolean;
  sortBy?: string;
  sortDirection?: SortDirectionType;
  label?: ReactNode;
  dataKey: string;
};

const TableHeadDefault = ({ height = 48, isNumeric = false, disableSort = false, sortBy, sortDirection, label, dataKey }: TableHeadDefaultProps) => {
  const theme = useTheme<Theme>();
  const styles = useMemo<CSSProperties>(() => ({
    ...flexContainerStyles,
    ...rowNoClickStyles,
    height: height + 'px', flex: 1, padding: theme.spacing(1), maxWidth: '100%'
  }), []);
  const mapSortDirection = (sortDirection: SortDirectionType) => sortDirection === 'ASC' ? 'asc' : 'desc';
  return <TableCell
    component='div'
    variant='head'
    style={styles}
    align={isNumeric || false ? 'right' : 'left'}>
    {disableSort !== true && <TableSortLabel active={sortBy === dataKey} direction={sortBy === dataKey ? mapSortDirection(sortDirection) : 'asc'}>
      <div>{label}</div>
      {sortBy === dataKey ? <span style={visuallyHiddenStyle}>{sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending'}</span> : null}
    </TableSortLabel>}
    {disableSort && <span>{label}</span>}
  </TableCell>;
};

export default memo(TableHeadDefault);
