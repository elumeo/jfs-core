import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ColumnProps, AutoSizer, Column, Index, SizeInfo, Table, TableProps } from 'react-virtualized';
import React, { memo } from 'react';
import clsx from 'clsx';
import { TableCellDefault } from 'Component/Table/TableCell';
import TableHeadDefault from 'Component/Table/TableHead/TableHeadDefault';
import { Size } from 'react-virtualized/dist/es/AutoSizer';

export const globalStyles = makeStyles((theme: Theme) => createStyles({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '100%'
  },
  tableCell: {
    flex: 1,
    fontSize: theme.typography.pxToRem(13),
    padding: theme.spacing(1),
    maxWidth: '100%'
  }
}));

export const useStyles = makeStyles<Theme, VirtualizedTableProps>((theme) => createStyles({
  table: {
    borderCollapse: 'separate',
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
      backgroundColor: theme.palette.background.default,
      overflow: (props) => props.headerOverflow + ' !important'
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
  onRowClick: {
    cursor: 'pointer'
  }
}));

export type ColumnData = ColumnProps & {
  numeric?: boolean;
}

export type VirtualizedTableProps = TableProps & {
  onResize?: (info: Size) => any;
  columns: ColumnData[];
  rowHeight?: number;
  headerHeight?: number;
  showRowHoverHighlight?: boolean;
  headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
}

const VirtualizedTable = React.forwardRef<Table, VirtualizedTableProps>(
  (props, ref) => {
    const {
      columns,
      onRowClick = null,
      rowCount,
      rowGetter,
      headerHeight = 48,
      rowHeight = 48,
      showRowHoverHighlight = false,
      headerOverflow = 'hidden',
      onResize,
      ...tableProps
    } = props;
    const globalClasses = globalStyles();
    const classes = useStyles({
      ...props,
      onRowClick: onRowClick,
      headerHeight: headerHeight,
      rowHeight: rowHeight,
      showRowHoverHighlight: showRowHoverHighlight,
      headerOverflow: headerOverflow
    });
    const getRowClassName = (index: Index) => clsx(
      classes.tableRow,
      globalClasses.flexContainer,
      {
        [classes.tableRowHover]: index.index !== -1 && showRowHoverHighlight === true,
        [classes.onRowClick]: onRowClick !== null
      }
    );

    return <AutoSizer onResize={onResize}>
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
          {columns.map(({ dataKey, ...other }, index) => {
            return <Column
              key={dataKey}
              headerStyle={{ outline: 'none' }}
              headerRenderer={(headerProps) => {
                const columnData = headerProps.columnData !== undefined ? headerProps.columnData : {};
                columnData.index = index;
                columnData.numeric = columns[index].numeric;
                columnData.headerHeight = headerHeight;
                return <TableHeadDefault headerProps={{ ...headerProps, columnData: columnData }} />;
              }}
              className={globalClasses.flexContainer}
              cellRenderer={({ cellData, columnIndex }) => <TableCellDefault
                cellData={cellData}
                isNumeric={(columnIndex != null && columns[columnIndex].numeric) || false}
              />}
              dataKey={dataKey}
              {...other}
            />;
          })}
        </Table>
      )}
    </AutoSizer>;
  }
);

export default memo(VirtualizedTable);
