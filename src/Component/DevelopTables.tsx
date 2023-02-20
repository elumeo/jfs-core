/* eslint-disable max-lines */
import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';
import { VirtualizedTable } from 'Component/Table';
// import { TableRowLoading } from 'Component/Table/TableRow';
// import { Index, TableCellProps } from 'react-virtualized';
// import { ColumnData } from 'Component/Table/VirtualizedTable';
// import TableHeadSelect from 'Component/Table/TableHead/TableHeadSelect';
// import TableCellSelect from 'Component/Table/TableCell/TableCellSelect';
// import {
//   TableCellDateTime,
//   TableCellDateTimeRange,
//   TableCellDefault,
//   TableCellProduct
// } from 'Component/Table/TableCell';
// import { ContentEllipseMode } from 'Component/Table/TableCell/TableCellDefault';
import TableCellProduct, { TableCellProductProps } from 'Component/Table/TableCell/TableCellProduct';
import { Grid } from '@mui/material';
import TableHeadDefault from './Table/TableHead/TableHeadDefault';
import useSortParamsRouter from 'Effect/useSortParamsRouter';
import { common } from '@mui/material/colors';
import { AppCardContent } from './Card';
import { TableCellSelect } from './Table/TableCell';

// const tableRowHeight = 48;


// const columns: ColumnData[] = [
//   {
//     width: 50,
//     dataKey: 'select',
//     disableSort: true,
//     headerRenderer: () => (
//       // eslint-disable-next-line no-console
//       <TableHeadSelect checked={false} onChange={console.log} height={tableRowHeight} />
//     ),
//     cellRenderer: (cellProps: TableCellProps) => (
//       // eslint-disable-next-line no-console
//       <TableCellSelect checked={false} value={cellProps.cellData} onChange={console.log} height={tableRowHeight} />
//     )
//   },
//   {
//     width: (width: number) => width - (120 * 4),
//     label: 'Dessert (100g serving)',
//     dataKey: 'dessert',
//     disableSort: true,
//     cellRenderer: (cellProps: TableCellProps) => (
//       <TableCellDefault
//         height={tableRowHeight}
//         cellData={cellProps.cellData}
//         contentEllipseMode={ContentEllipseMode.Lines}
//         contentEllipseLines={2}
//       />
//     )
//   },
//   {
//     width: 120,
//     label: 'Calories\u00A0(g)',
//     dataKey: 'calories'
//   },
//   {
//     width: 120,
//     label: 'Fat\u00A0(g)',
//     dataKey: 'fat'
//   },
//   {
//     width: 120,
//     label: 'Carbs\u00A0(g)',
//     dataKey: 'carbs'
//   },
//   {
//     width: 220,
//     label: 'Datum (Range)',
//     dataKey: 'datetimeRange',
//     cellRenderer: cellProps => <TableCellDateTimeRange cellData={cellProps.cellData} height={tableRowHeight} />
//   },
//   {
//     width: 180,
//     label: 'Datum',
//     dataKey: 'datetime',
//     cellRenderer: cellProps => <TableCellDateTime cellData={cellProps.cellData} height={tableRowHeight} />
//   }
// ];

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
  isProductBundle: index % 2 === 0,
  hasNoTvLock: true,
  id: '4716YT',
  name: index % 2 === 0
    ? 'Das ist ein Produktname'
    : 'Das ist ein sehr langer Produktname Das ist ein sehr langer Produktname Das ist ein sehr langer ProduktnameDas ist ein sehr langer Produktname',
  inStockPool: true,
  productType: null,
  mediaUris: [{
    productId: '4716YT',
    uri: 'https://api-test.juwelo.de/media/small/4716YT.jpg'
  }],
  height: 100
});

const productRows: TableCellProductProps[] = Array(200).fill(undefined).map((_, index) => createProductDataVirtualizedTable(index));

// for (let i = 0; i < 200; i += 1) {
//   productRows.push(createProductDataVirtualizedTable(i));
// }
const tableStyle = { height: 400 }

const DevelopTables: React.FC = () => {
  const [{ sortBy, sortDirection }, setSort] = useSortParamsRouter<TableCellProductProps>({ sortBy: 'name' });
  const header = React.useCallback(() => (
    <TableRow sx={{ backgroundColor: common.white, height: 48 }}>
      {["rowIndex", "isProductBundle", "hasNoTvLock", "id", "height", "inStockPool", "productType", "mediaUris",]
        .map((key, inde) =>
          <TableHeadDefault
            dataKey={key}
            key={key}
            sortBy={sortBy}
            height={48}
            onClick={() => {
              setSort({
                sortBy: key as keyof TableCellProductProps,
                sortDirection: sortDirection === 'asc'
                  ? 'desc'
                  : 'asc'
              })
            }
            }
            sortDirection={sortDirection}
            disableSort={inde % 2 === 0}
            label={key} />
        )
      }
    </TableRow>
  )
    ,
    [sortBy, sortDirection, setSort]
  );
  return (
    <>
      <Card sx={{ width: '100%', height: '100%' }}>
        <AppCardContent sx={{ height: '100%' }}>
          <VirtualizedTable<typeof productRows[number]>
            // showRowHoverHighlight
            data={productRows}
            style={tableStyle}
            sortBy={sortBy}
            sortDirection={sortDirection}
            fixedHeaderContent={header}
            itemContent={
              (index, row) => <React.Fragment key={index}>
                <TableCellSelect value={row.rowIndex.toString()} checked={!!row.rowIndex} onChange={console.log} >{row.rowIndex}</TableCellSelect>
                <TableCell>{row.isProductBundle ? 'true' : 'false'}</TableCell>
                <TableCell>{row.hasNoTvLock ? 'true' : 'false'}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.inStockPool ? 'true' : 'false'}</TableCell>
                <TableCell>{row.productType}</TableCell>
                <TableCellProduct {...row} />
              </React.Fragment>
            }
          />
        </AppCardContent>
      </Card>

      <Card sx={{ width: '100%' }}>
        <Grid container>
          <Grid item xs={6}>
            <CardContent sx={{ height: 300 }}>
              <TableContainer sx={{ maxHeight: 260 }}>
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
            <CardContent sx={{ height: 300 }}>
              {/* <VirtualizedTable
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
              /> */}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default DevelopTables
