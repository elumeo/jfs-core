import { ColumnProps, AutoSizer, Column, Index, SizeInfo, Table, TableProps } from 'react-virtualized';
import React, { memo } from 'react';
import { TableCellDefault } from 'Component/Table/TableCell';
import { Size } from 'react-virtualized/dist/es/AutoSizer';
import TableHeadDefault from 'Component/Table/TableHead/TableHeadDefault';

// @ts-ignore
export interface ColumnData extends ColumnProps {
  numeric?: boolean;
  width?: number | ((fullWidth: number) => number);
}

export type VirtualizedTableBaseProps = Partial<TableProps> & {
  onResize?: (info: Size) => unknown;
  columns: ColumnData[];
  rowHeight?: number | ((params: Index) => number);
  showRowHoverHighlight?: boolean;
  headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
};

const VirtualizedTableBase = React.forwardRef<Table, VirtualizedTableBaseProps>(
  ({
     columns = [],
     onRowClick = null,
     rowCount,
     rowGetter,
     headerHeight = 48,
     rowHeight = 48,
     showRowHoverHighlight = false,
     onResize,
     ...tableProps
   }, ref) => {
    const getRowClassName = (index: Index) => 'virtualized-table__row virtualized-table__flex-container'
      + (
        index.index !== -1 && showRowHoverHighlight === true
          ? ' virtualized-table__row--hover'
          : ''
      )
      + (
        onRowClick !== null
          ? ' virtualized-table--click'
          : ''
      )
    ;

    return (
      <AutoSizer onResize={onResize}>
        {({ height, width }: SizeInfo) => (
          <Table
            ref={ref}
            height={height}
            width={width}
            rowClassName={getRowClassName}
            headerHeight={headerHeight}
            rowHeight={rowHeight}
            rowCount={rowCount}
            rowGetter={rowGetter}
            onRowClick={onRowClick}
            gridClassName={'virtualized-table__grid'}
            {...tableProps}
          >
            {columns.map(({ dataKey, width: columnWidth, ...other }, index) => {
              const finalWidth = (typeof columnWidth !== 'number')
                ? (columnWidth as (fullWidth: number) => number)(width)
                : columnWidth as number
              ;
              return (
                <Column
                  key={dataKey}
                  headerStyle={{ outline: 'none' }}
                  headerRenderer={headerProps => {
                    const columnData = headerProps.columnData !== undefined ? headerProps.columnData : {};
                    columnData.index = index;
                    columnData.numeric = columns[index].numeric;
                    columnData.headerHeight = headerHeight;
                    return <TableHeadDefault headerProps={{ ...headerProps, columnData: columnData }} />;
                  }}
                  className={'virtualized-table__flex-container'}
                  cellRenderer={({ cellData, columnIndex }) => <TableCellDefault
                    cellData={cellData}
                    isNumeric={(columnIndex != null && columns[columnIndex].numeric) || false}
                  />}
                  dataKey={dataKey}
                  width={finalWidth}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
);
export default memo(VirtualizedTableBase);
