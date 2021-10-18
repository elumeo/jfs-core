import React, { memo } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core';
import { SortDirectionType, TableHeaderProps } from 'react-virtualized';

export type TableHeadDefaultBaseProps = {
  headerProps: TableHeaderProps;
  className?: string;
};

const TableHeadDefaultBase = ({ headerProps, className = '' }: TableHeadDefaultBaseProps) => {
  const mapSortDirection = (sortDirection: SortDirectionType) => sortDirection === 'ASC' ? 'asc' : 'desc';
  return (
    headerProps && (
      <TableCell
        component={'div'}
        className={`virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click ${className}`}
        variant={'head'}
        style={{ height: headerProps.columnData.headerHeight }}
        align={headerProps.columnData.numeric || false ? 'right' : 'left'}>
        {headerProps.disableSort !== true && (
          <TableSortLabel
            active={headerProps.sortBy === headerProps.dataKey}
            direction={headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc'}
          >
            <div>{headerProps.label}</div>
            {headerProps.sortBy === headerProps.dataKey ? (
              <span className={'virtualized-table--visually-hidden'}>
                {headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </span>
            ) : null}
          </TableSortLabel>
        )}
        {headerProps.disableSort && <span>{headerProps.label}</span>}
      </TableCell>
    )
  );
};

export default memo(TableHeadDefaultBase);
