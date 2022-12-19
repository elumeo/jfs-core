/* eslint-disable max-lines */
import * as React from 'react';
import { useCallback } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';
import { VirtualizedTable } from 'Component/Table';
import { TableRowLoading } from 'Component/Table/TableRow';
import { Index, TableCellProps } from 'react-virtualized';
import { ColumnData } from 'Component/Table/VirtualizedTable';
import TableHeadSelect from 'Component/Table/TableHead/TableHeadSelect';
import TableCellSelect from 'Component/Table/TableCell/TableCellSelect';
import {
  TableCellDateTime,
  TableCellDateTimeRange,
  TableCellDefault,
  TableCellProduct
} from 'Component/Table/TableCell';
import { ContentEllipseMode } from 'Component/Table/TableCell/TableCellDefault';
import { TableCellProductProps } from 'Component/Table/TableCell/TableCellProduct';
import { Grid } from '@material-ui/core';

const tableRowHeight = 48;


const columns: ColumnData[] = [
  {
    width: 50,
    dataKey: 'select',
    disableSort: true,
    headerRenderer: () => (
      // eslint-disable-next-line no-console
      <TableHeadSelect checked={false} onChange={console.log} height={tableRowHeight} />
    ),
    cellRenderer: (cellProps: TableCellProps) => (
      // eslint-disable-next-line no-console
      <TableCellSelect checked={false} value={cellProps.cellData} onChange={console.log} height={tableRowHeight} />
    )
  },
  {
    width: (width: number) => width - (120 * 4),
    label: 'Dessert (100g serving)',
    dataKey: 'dessert',
    disableSort: true,
    cellRenderer: (cellProps: TableCellProps) => (
      <TableCellDefault
        height={tableRowHeight}
        cellData={cellProps.cellData}
        contentEllipseMode={ContentEllipseMode.Lines}
        contentEllipseLines={2}
      />
    )
  },
  {
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories'
  },
  {
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat'
  },
  {
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs'
  },
  {
    width: 220,
    label: 'Datum (Range)',
    dataKey: 'datetimeRange',
    cellRenderer: cellProps => <TableCellDateTimeRange cellData={cellProps.cellData} height={tableRowHeight} />
  },
  {
    width: 180,
    label: 'Datum',
    dataKey: 'datetime',
    cellRenderer: cellProps => <TableCellDateTime cellData={cellProps.cellData} height={tableRowHeight} />
  }
];

type DataVirtualizedTable = {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  datetimeRange: DateTimeRangeCellProps;
  datetime: Date;
}
const rows: DataVirtualizedTable[] = [];

type SampleVirtualizedTable = [string, number, number, number, DateTimeRangeCellProps, Date?];

const sample: SampleVirtualizedTable[] = [
  ['Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt', 159, 6.0, 24, {
    start: null,
    end: null,
    isLiveShow: false
  }, null],
  ['Ice cream sandwich', 237, 9.0, 37, { start: new Date(), end: new Date(), isLiveShow: false }, new Date()],
  ['Eclair', 262, 16.0, 24, { start: new Date(2021, 9, 23, 8, 0, 15), end: new Date(), isLiveShow: false }, new Date()],
  ['Cupcake', 305, 3.7, 67, { start: new Date(), end: new Date(), isLiveShow: false }, new Date()],
  ['Gingerbread', 356, 16.0, 49, { start: new Date(), end: new Date(), isLiveShow: false }, new Date()]
];

const createDataVirtualizedTable = (id: number, dessert: string, calories: number, fat: number, carbs: number, datetimeRange: DateTimeRangeCellProps, datetime?: Date): DataVirtualizedTable => ({
  id,
  dessert,
  calories,
  fat,
  carbs,
  datetimeRange,
  datetime
});

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createDataVirtualizedTable(i, ...randomSelection));
}
const createProductDataVirtualizedTable = (index: number): TableCellProductProps => ({
  rowIndex: index,
  isProductBundle: true,
  hasNoTvLock: true,
  id: '4716YT',
  name: 'Das ist ein sehr langer Produktname Das ist ein sehr langer Produktname',
  inStockPool: true,
  productType: null,
  mediaUris: [{
    productId: '4716YT',
    uri: 'https://api-test.juwelo.de/media/small/4716YT.jpg'
  }],
  height: 100
});

const productRows: TableCellProductProps[] = [];

for (let i = 0; i < 200; i += 1) {
  productRows.push(createProductDataVirtualizedTable(i));
}

const DevelopTables: React.FC = () => {
  const noRowsRenderer = useCallback(() => <TableRowLoading />, []);
  const rowGetter = useCallback((row: Index) => rows[row.index], []);
  const productRowGetter = useCallback((row: Index) => productRows[row.index], []);

  return (
    <>
      <Card style={{ width: '100%' }}>
        <CardContent style={{ height: 600 }}>
          <VirtualizedTable
            showRowHoverHighlight
            rowHeight={tableRowHeight}
            rowCount={rows.length}
            rowGetter={rowGetter}
            noRowsRenderer={noRowsRenderer}
            sortBy={'calories'}
            sortDirection={'ASC'}
            columns={columns}
            />
        </CardContent>
      </Card>

      <Card style={{ width: '100%' }}>
        <Grid container>
          <Grid item xs={6}>
            <CardContent style={{ height: 300 }}>
              <TableContainer style={{ maxHeight: 260 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {['calories', 'carbs', 'dessert', 'fat', 'id', 'protein'].map((column, index) => <TableCell
                        key={'column-head-index-' + index}>{column}</TableCell>)}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => <TableRow key={'row-body-index' + index}>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.dessert}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.id}</TableCell>
                    </TableRow>)}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Grid>

          <Grid item xs={6}>
            <CardContent style={{ height: 300 }}>
              <VirtualizedTable
                headerHeight={50}
                rowHeight={100}
                rowCount={200}
                rowGetter={productRowGetter}
                showRowHoverHighlight
                columns={[
                  {
                    dataKey: 'product',
                    width: 400,
                    cellRenderer: (cellProps: TableCellProps) => <TableCellProduct {...cellProps.rowData} />
                  }
                ]}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default React.memo(DevelopTables)
