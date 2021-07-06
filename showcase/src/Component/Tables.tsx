import React, { memo } from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import AppNavigation from 'Component/AppNavigation';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import VirtualizedTable from '@elumeo/jfs-core/build/Component/Table/VirtualizedTable';
import { Index } from 'react-virtualized';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createDataBasicTable(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return {name, calories, fat, carbs, protein};
}

const rowsBasicTable = [
  createDataBasicTable('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createDataBasicTable('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createDataBasicTable('Eclair', 262, 16.0, 24, 6.0),
  createDataBasicTable('Cupcake', 305, 3.7, 67, 4.3),
  createDataBasicTable('Gingerbread', 356, 16.0, 49, 3.9),
];

type DataVirtualizedTable = {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}

type SampleVirtualizedTable = [string, number, number, number, number];

const sample: SampleVirtualizedTable[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createDataVirtualizedTable(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): DataVirtualizedTable {
  return {id, dessert, calories, fat, carbs, protein};
}

const rows: DataVirtualizedTable[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createDataVirtualizedTable(i, ...randomSelection));
}

const Tables = () => {
  const css = useStyles();
  const [denseBasicTable, setDenseBasicTable] = React.useState(false)
  const [denseVirtualizedTable, setDenseVirtualizedTable] = React.useState(false)
  const toggleDenseBasicTable = () => setDenseBasicTable(!denseBasicTable);
  const toggleDenseVirtualizedTable = () => setDenseVirtualizedTable(!denseVirtualizedTable);
  return (<Grid container>
    <Grid item xs={2}>
      <AppNavigation/>
    </Grid>
    <Grid item xs>
      <Box component={Container}>
        <Grid container direction={'column'} spacing={1}>
          <Grid item xs>
            <Card>
              <CardHeader title='Basic Table'/>
              <CardContent>
                <FormControlLabel control={<Switch onChange={toggleDenseBasicTable} value={denseBasicTable}/>} label='dense'/>
                <Table className={css.table} aria-label='simple table' size={denseBasicTable ? 'small' : 'medium'}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align='right'>Calories</TableCell>
                      <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                      <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                      <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsBasicTable.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component='th' scope='row'>
                          {row.name}
                        </TableCell>
                        <TableCell align='right'>{row.calories}</TableCell>
                        <TableCell align='right'>{row.fat}</TableCell>
                        <TableCell align='right'>{row.carbs}</TableCell>
                        <TableCell align='right'>{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title='Virtualized Table'/>
              <CardContent style={{height: '500px'}}>
                {/*<FormControlLabel control={<Switch onChange={toggleDenseVirtualizedTable} value={denseVirtualizedTable}/>} label='dense'/>*/}
                <Box>
                  <Typography>Virtualized Tables are based on <Link target={'_blank'} href={'https://github.com/bvaughn/react-virtualized'}>react-virtualized</Link> library. This
                    lib does not support a <i>dense</i> parameter on the table but we can adjust the <i>headerHeight</i> and <i>rowHeight</i> by ourself.</Typography>
                  <FormControlLabel control={<Switch onChange={toggleDenseVirtualizedTable} value={denseVirtualizedTable} />} label='dense (Changes headerHeight and rowHeight)'/>
                </Box>
                <VirtualizedTable
                  headerHeight={denseVirtualizedTable === true ? 31 : 48}
                  rowHeight={denseVirtualizedTable === true ? 31 : 48}
                  rowCount={rows.length}
                  rowGetter={(row: Index) => rows[row.index]}
                  sortBy={'dessert'}
                  sortDirection={'ASC'}
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </Grid>);
};
export default memo(Tables);
