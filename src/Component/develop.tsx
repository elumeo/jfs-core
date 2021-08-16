import React from 'react';
import { Box, Paper, Tooltip } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { VirtualizedTable } from 'Component/Table';
import { Index, TableCellProps } from 'react-virtualized';
import 'date-fns';
import { TableCellDefault } from 'Component/Table/TableCell';
import ButtonProgress from 'Component/Button/ButtonProgress';
import IconButtonProgress from 'Component/Button/IconButtonProgress';

type Data = {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}

type Sample = [string, number, number, number, number];

const sample: Sample[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9]
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const rows: Data[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

const Develop = () => {
  return <Box component={Paper}>
    <Box width={500}>
      <IconButtonProgress inProgress><HelpIcon /></IconButtonProgress>
    </Box>
    <Tooltip title={'Hallo Welt!'} interactive><HelpIcon /></Tooltip>
    <Box padding={1} height={'100%'}>
      <VirtualizedTable
        showRowHoverHighlight
        rowCount={rows.length}
        rowGetter={(row: Index) => rows[row.index]}
        sortBy={'dessert'}
        sortDirection={'ASC'}
        sort={() => console.log('sorting')}
        // rowHeight={100}
        columns={[
          {
            width: 200,
            flexGrow: 1,
            label: 'Dessert',
            dataKey: 'dessert',
            disableSort: false,
            cellRenderer: (tableProps: TableCellProps) => <TableCellDefault cellData={tableProps.cellData} wrapContent={false} />
          },
          {
            width: 120,
            label: 'Calories (g)',
            dataKey: 'calories',
            numeric: true,
          },
          {
            width: 120,
            label: 'Fat (g)',
            dataKey: 'fat',
            numeric: true,
          },
          {
            width: 120,
            label: 'Carbs (g)',
            dataKey: 'carbs',
            numeric: true,
          },
          {
            width: 120,
            label: 'Protein (g)',
            dataKey: 'protein',
            numeric: true,
          },
        ]}
      />
    </Box>
  </Box>;
};

export default Develop;
