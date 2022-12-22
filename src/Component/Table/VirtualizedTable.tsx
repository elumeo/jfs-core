import { ColumnProps, AutoSizer, Column, SizeInfo, Table, TableProps, AutoSizerProps } from 'react-virtualized';
import React, { memo, useCallback } from 'react';
import { TableCellDefault } from 'Component/Table/TableCell';
import TableHeadDefault from 'Component/Table/TableHead/TableHeadDefault';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

export const visuallyHiddenStyle: CSSProperties = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: '20px',
  width: '1px'
};

export const flexContainerStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box'
};

export const ellipsesStyle: CSSProperties = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

export const noOutlineStyles: CSSProperties = { outline: 'none' };
export const rowStyles: CSSProperties = { direction: 'inherit' };
export const rowClickStyles: CSSProperties = { cursor: 'pointer' };
export const rowNoClickStyles: CSSProperties = { cursor: 'initial' };
export const columnHeaderStyles: CSSProperties = { outline: 'none' };

const tableStyle: CSSProperties = { borderCollapse: 'separate' };
const columnStyle: CSSProperties = { ...flexContainerStyles, height: '100%' };

const useRowStyles = makeStyles<Theme, VirtualizedTableProps>((theme: Theme) => createStyles({
  root: {
    ...noOutlineStyles,
    ...flexContainerStyles,
    direction: 'inherit',
    cursor: (props) => props.onRowClick !== null && props.onRowClick !== undefined ? 'pointer' : 'initial',
    '&:hover:not(.ReactVirtualized__Table__headerRow)': {
      backgroundColor: (props) => props.showRowHoverHighlight ? theme.palette.grey[200] : 'inherit'
    }
  }
}));

export type ColumnData = Omit<ColumnProps, 'width'> & {
  numeric?: boolean;
  width?: number | ((fullWidth: number) => number);
}

export type VirtualizedTableProps = Partial<TableProps> & {
  columns: ColumnData[];
  showRowHoverHighlight?: boolean;
  headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
  onResize?: AutoSizerProps['onResize'];
  rowHeight?: TableProps['rowHeight'];
};

const VirtualizedTable = React.forwardRef<Table, VirtualizedTableProps>((props, ref) => {
  const { columns = [], onRowClick = null, rowCount, rowGetter, headerHeight = 48, rowHeight = 48, onResize, ...tableProps } = props;
  const rowClasses = useRowStyles(props);

  const headerRenderer: ColumnProps['headerRenderer'] = useCallback(headerProps => <TableHeadDefault
    height={headerHeight}
    disableSort={headerProps.disableSort}
    sortBy={headerProps.sortBy}
    sortDirection={headerProps.sortDirection}
    // @ts-ignore I do not get what the problem here is React.ReactNode != ReactNode ???
    label={headerProps.label}
    dataKey={headerProps.dataKey}
  />, [headerHeight]);

  const getFinalColumnWidth = useCallback((columnWidth: number | ((fullWidth: number) => number), tableWidth: number) => typeof columnWidth === 'function'
    ? (columnWidth as (fullWidth: number) => number)(tableWidth)
    : columnWidth as number
    , []
  );

  const getCellRenderer: ColumnProps['cellRenderer'] = useCallback(props => <TableCellDefault
    height={typeof rowHeight === 'number' ? rowHeight as number : rowHeight({ index: props.rowIndex })}
    cellData={props.cellData}
    isNumeric={(props.columnIndex != null && columns[props.columnIndex].numeric) || false}
  />, []);

  // @ts-ignore See https://github.com/bvaughn/react-virtualized/issues/1739
  return <AutoSizer onResize={onResize}>
    {({ height, width }: SizeInfo) => (
      // @ts-ignore See https://github.com/bvaughn/react-virtualized/issues/1739
      <Table
        ref={ref}
        height={height}
        width={width}
        rowClassName={rowClasses.root}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        rowCount={rowCount}
        rowGetter={rowGetter}
        onRowClick={onRowClick}
        gridStyle={noOutlineStyles}
        style={tableStyle}
        {...tableProps}
      >
        {/* @ts-ignore See https://github.com/bvaughn/react-virtualized/issues/1739 */}
        {columns.map(({ dataKey, width: columnWidth, ...other }) => <Column
          key={dataKey}
          headerStyle={columnHeaderStyles}
          headerRenderer={headerRenderer}
          style={columnStyle}
          cellRenderer={getCellRenderer}
          dataKey={dataKey}
          width={getFinalColumnWidth(columnWidth, width)}
          {...other}
        />
        )}
      </Table>
    )}
  </AutoSizer>;
}
);
export default memo(VirtualizedTable);
