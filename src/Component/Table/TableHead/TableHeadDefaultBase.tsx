import React, { memo } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';
import { SortDirectionType } from 'react-virtualized';

export type TableHeadDefaultBaseProps = {
  height?: number;
  isNumeric?: boolean;
  className?: string;
  disableSort?: boolean;
  sortBy?: string;
  sortDirection?: SortDirectionType;
  label?: string;
  dataKey: string;
};

const TableHeadDefaultBase = ({ height = 48, isNumeric = false, disableSort = false, sortBy, sortDirection, label, dataKey, className = '' }: TableHeadDefaultBaseProps) => {
  const mapSortDirection = (sortDirection: SortDirectionType) => sortDirection === 'ASC' ? 'asc' : 'desc';
  return (
    <TableCell
      component={'div'}
      className={`virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click ${className}`}
      variant={'head'}
      style={{ height }}
      align={isNumeric || false ? 'right' : 'left'}>
      {disableSort !== true && (
        <TableSortLabel
          active={sortBy === dataKey}
          direction={sortBy === dataKey ? mapSortDirection(sortDirection) : 'asc'}
        >
          <div>{label}</div>
          {sortBy === dataKey ? (
            <span className={'virtualized-table--visually-hidden'}>
                {sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </span>
          ) : null}
        </TableSortLabel>
      )}
      {disableSort && <span>{label}</span>}
    </TableCell>
  );
};

export default memo(TableHeadDefaultBase);
