import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ColumnProps, TableProps } from 'react-virtualized/dist/es/Table';
import { AutoSizer, Column, SizeInfo, Table, TableCellRenderer, TableHeaderProps } from 'react-virtualized';
import React, { memo } from 'react';
import clsx from 'clsx';

export const virtualizedGlobalStyles = makeStyles(theme => createStyles({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
    },
  },
  tableGrid: {
    outline: 'none',
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
    fontSize: theme.typography.pxToRem(13),
    padding: theme.spacing(1),
    maxWidth: '100%'
  },
  noClick: {
    cursor: 'initial',
  },
}));

type ColumnData = ColumnProps & {
  numeric?: boolean;
}

type Row = {
  index: number;
}

type VirtualizedTableProps = TableProps & {
  columns: ColumnData[];
  rowHeight?: number;
}

const VirtualizedTable = React.forwardRef<Table, VirtualizedTableProps>(
  ({
     columns,
     onRowClick,
     rowCount,
     rowGetter,
     headerHeight = 48,
     rowHeight = 48,
     ...tableProps
   },
   ref) => {
    const classes = virtualizedGlobalStyles();
    const getRowClassName = ({index}: Row) => {
      return clsx(classes.tableRow, classes.flexContainer, {
        [classes.tableRowHover]: index !== -1 && onRowClick != null,
      });
    };

    const cellRenderer: TableCellRenderer = ({cellData, columnIndex}) => {
      return (
        <TableCell
          component={'div'}
          className={clsx(classes.tableCell, classes.flexContainer, {
            [classes.noClick]: onRowClick == null,
          })}
          variant={'body'}
          style={{height: rowHeight}}
          align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
        >{cellData}</TableCell>
      );
    };

    const headerRenderer = ({label, columnIndex}: TableHeaderProps & { columnIndex: number }) => {
      return (
        <TableCell
          component={'div'}
          className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
          variant={'head'}
          style={{height: headerHeight}}
          align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        ><span>{label}</span></TableCell>
      );
    };

    return (
      <AutoSizer>
        {({height, width}: SizeInfo) => (
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
            gridStyle={{direction: 'inherit'}}
            gridClassName={classes.tableGrid}
            {...tableProps}
          >
            {columns.map(({dataKey, ...other}, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  });

export default memo(VirtualizedTable);
