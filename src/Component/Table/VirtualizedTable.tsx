import { TableCell, TableSortLabel } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ColumnProps, AutoSizer, Column, Index, SizeInfo, Table, TableHeaderProps, SortDirectionType, TableProps } from 'react-virtualized';
import React, { memo } from 'react';
import clsx from 'clsx';
import { TableCellDefault } from 'Component/Table/TableCell';

export const virtualizedGlobalStyles = makeStyles(theme => createStyles({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '100%'
  },
  table: {
    borderCollapse: 'separate',
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
      backgroundColor: theme.palette.background.default
    }
  },
  tableGrid: {
    outline: 'none'
  },
  tableRow: {
    outline: 'none'
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1,
    fontSize: theme.typography.pxToRem(13),
    padding: theme.spacing(1),
    maxWidth: '100%'
  },
  onRowClick: {
    cursor: 'pointer'
  },
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

type ColumnData = ColumnProps & {
  numeric?: boolean;
}

type VirtualizedTableProps = TableProps & {
  columns: ColumnData[];
  rowHeight?: number;
  headerHeight?: number;
  showRowHoverHighlight?: boolean;
}

const VirtualizedTable = React.forwardRef<Table, VirtualizedTableProps>(
  ({
     columns,
     onRowClick = null,
     rowCount,
     rowGetter,
     headerHeight = 48,
     rowHeight = 48,
     showRowHoverHighlight = false,
     ...tableProps
   },
   ref) => {
    const classes = virtualizedGlobalStyles();
    const getRowClassName = (index: Index) => clsx(
      classes.tableRow,
      classes.flexContainer,
      {
        [classes.tableRowHover]: index.index !== -1 && showRowHoverHighlight === true,
        [classes.onRowClick]: onRowClick !== null
      }
    );

    const mapSortDirection = (sortDirection: SortDirectionType) => sortDirection === 'ASC' ? 'asc' : 'desc';

    const headerRenderer = (headerProps: TableHeaderProps & { columnIndex: number }) => <TableCell
      component={'div'}
      className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
      variant={'head'}
      style={{ height: headerHeight }}
      align={columns[headerProps.columnIndex].numeric || false ? 'right' : 'left'}>
      {tableProps.sort !== undefined && headerProps.disableSort !== true && <TableSortLabel
        active={headerProps.sortBy === headerProps.dataKey}
        direction={headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc'}>
        {headerProps.label}
        {headerProps.sortBy === headerProps.dataKey ? (
          <span className={classes.visuallyHidden}>{headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>) : null}
      </TableSortLabel>}
      {tableProps.sort === undefined && <span>{headerProps.label}</span>}
    </TableCell>;

    return <AutoSizer>
      {({ height, width }: SizeInfo) => (
        <Table
          ref={ref}
          height={height}
          width={width}
          className={classes.table}
          headerHeight={headerHeight!}
          rowHeight={rowHeight!}
          rowCount={rowCount}
          rowGetter={rowGetter}
          rowClassName={getRowClassName}
          onRowClick={onRowClick}
          gridStyle={{ direction: 'inherit' }}
          gridClassName={classes.tableGrid}
          {...tableProps}
        >
          {columns.map(({ dataKey, ...other }, index) => <Column
            key={dataKey}
            headerRenderer={(headerProps) => headerRenderer({ ...headerProps, columnIndex: index })}
            className={classes.flexContainer}
            cellRenderer={({ cellData, columnIndex }) => <TableCellDefault
              cellData={cellData}
              // rowHeight={rowHeight}
              isNumeric={(columnIndex != null && columns[columnIndex].numeric) || false}
            />}
            dataKey={dataKey}
            {...other}
          />)}
        </Table>
      )}
    </AutoSizer>;
  }
);

export default memo(VirtualizedTable);
