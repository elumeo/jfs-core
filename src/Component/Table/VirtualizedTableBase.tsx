import { ColumnProps, AutoSizer, Column, Index, SizeInfo, Table, TableProps, AutoSizerProps } from 'react-virtualized';
import React, { memo } from 'react';
import { TableCellDefault } from 'Component/Table/TableCell';
import TableHeadDefault from 'Component/Table/TableHead/TableHeadDefault';

// @ts-ignore
export interface ColumnData extends ColumnProps {
  numeric?: boolean;
  width?: number | ((fullWidth: number) => number);
}

export type VirtualizedTableBaseProps = Partial<TableProps> & {
  columns: ColumnData[];
  showRowHoverHighlight?: boolean;
  headerOverflow?: 'visible' | 'hidden' | 'inherit' | 'initial';
  onResize?: AutoSizerProps['onResize'];
  rowHeight?: TableProps['rowHeight'];
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
      + (index.index !== -1 && showRowHoverHighlight === true ? ' virtualized-table__row--hover' : '')
      + (onRowClick !== null ? ' virtualized-table--click' : '')
    ;

    const headerRenderer: ColumnProps['headerRenderer'] = (headerProps) => <TableHeadDefault
      height={headerHeight}
      disableSort={headerProps.disableSort}
      sortBy={headerProps.sortBy}
      sortDirection={headerProps.sortDirection}
      label={headerProps.label}
      dataKey={headerProps.dataKey}
    />;

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
            {columns.map(({ dataKey, width: columnWidth, ...other }) => {
              const finalWidth = (typeof columnWidth !== 'number')
                ? (columnWidth as (fullWidth: number) => number)(width)
                : columnWidth as number
              ;
              return (
                <Column
                  key={dataKey}
                  headerStyle={{ outline: 'none' }}
                  headerRenderer={headerRenderer}
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
