import React from 'react';
import { Box, Paper, Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { VirtualizedTable } from 'Component/Table';
import { Index } from 'react-virtualized';

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
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const rows: Data[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}

const Develop = () => {
  const theme = useTheme<Theme>();
  return <Paper style={{height: 'calc(100% - ' + theme.spacing(8) + 'px)'}}>
    <Box padding={1} height={'100%'}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={(row: Index) => rows[row.index]}
        sortBy={'dessert'}
        sortDirection={'asc'}
        sort={() => console.log('sorting')}
        columns={[
          {
            width: 200,
            flexGrow: 1,
            label: 'Dessert',
            dataKey: 'dessert',
            disableSort: false
          },
          {
            width: 120,
            label: 'Calories\u00A0(g)',
            dataKey: 'calories',
            numeric: true,
          },
          {
            width: 120,
            label: 'Fat\u00A0(g)',
            dataKey: 'fat',
            numeric: true,
          },
          {
            width: 120,
            label: 'Carbs\u00A0(g)',
            dataKey: 'carbs',
            numeric: true,
          },
          {
            width: 120,
            label: 'Protein\u00A0(g)',
            dataKey: 'protein',
            numeric: true,
          },
        ]}
      />
    </Box>
  </Paper>
};

export default Develop;
