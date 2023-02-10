/* eslint-disable max-lines */
import React, { memo } from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, Link, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AppNavigation from 'Component/AppNavigation';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import VirtualizedTable from '@elumeo/jfs-core/build/Component/Table/VirtualizedTable';

const sxs: Record<string, SxProps> = {
  TableBasic: {
    minWidth: 650,
  },
  TableBasicContainer: {
    maxHeight: 440,
  },
};

function createDataBasicTable(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rowsBasicTable = [
  createDataBasicTable('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createDataBasicTable('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createDataBasicTable('Eclair', 262, 16.0, 24, 6.0),
  createDataBasicTable('Cupcake', 305, 3.7, 67, 4.3),
  createDataBasicTable('Gingerbread', 356, 16.0, 49, 3.9),
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
  return { id, dessert, calories, fat, carbs, protein };
}

const rows: DataVirtualizedTable[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createDataVirtualizedTable(i, ...randomSelection));
}

const Tables = () => {
  const [denseBasicTable, setDenseBasicTable] = React.useState(false)
  const [stickyBasicTable, setStickyBasicTable] = React.useState(true)
  const [denseVirtualizedTable, setDenseVirtualizedTable] = React.useState(false)
  const toggleDenseBasicTable = () => setDenseBasicTable(!denseBasicTable);
  const toggleStickyBasicTable = () => setStickyBasicTable(!stickyBasicTable);
  const toggleDenseVirtualizedTable = () => setDenseVirtualizedTable(!denseVirtualizedTable);

  return (<Grid container>
    <Grid item xs={2}><AppNavigation /></Grid>
    <Grid item xs>
      <Container>
        <Grid container direction={'column'} spacing={1}>
          <Grid item xs>
            <Card>
              <CardHeader title='Basic Table' />
              <CardContent>
                <Typography>When making the table header sticky it becomes more highlighted (default app background color). The sticky header should be the default behaviour.</Typography>
                <FormControlLabel control={<Switch onChange={toggleStickyBasicTable} checked={stickyBasicTable} />} label='Sticky' />
                <FormControlLabel control={<Switch onChange={toggleDenseBasicTable} checked={denseBasicTable} />} label='Dense' />
                <TableContainer sx={sxs.TableBasicContainer}>
                  <Table sx={sxs.TableBasic} aria-label='simple table' size={denseBasicTable ? 'small' : 'medium'} stickyHeader={stickyBasicTable}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories (g)</TableCell>
                        <TableCell align='right'>Fat (g)</TableCell>
                        <TableCell align='right'>Carbs (g)</TableCell>
                        <TableCell align='right'>Protein (g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsBasicTable.map((row, index) => (
                        <TableRow key={row.name + '_' + index} hover>
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
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title='Virtualized Table' />
              <Box component={CardContent} height={'600px'}>
                <Grid container direction={'column'} style={{ height: '100%' }}>
                  <Grid item>
                    <Typography>Virtualized Tables are based on <Link target={'_blank'} href={'https://github.com/bvaughn/react-virtualized'}>react-virtualized</Link> library. This
                      lib does not support a <i>dense</i> parameter on the table but we can adjust the <i>headerHeight</i> and <i>rowHeight</i> by ourself. The sticky behaviour is
                      different as well and cannot be disabled. Check the different scrollbar behaviour on the right side.</Typography>
                    <FormControlLabel control={<Switch onChange={toggleDenseVirtualizedTable} checked={denseVirtualizedTable} />} label='Dense (Changes headerHeight and rowHeight)' />
                  </Grid>
                  <Grid item xs>
                    <VirtualizedTable
                      // showRowHoverHighlight
                      data={rows}
                      // headerHeight={denseVirtualizedTable === true ? 31 : 48}
                      // rowHeight={denseVirtualizedTable === true ? 31 : 48}
                      // rowCount={rows.length}
                      // rowGetter={(row: Index) => rows[row.index]}
                      sortBy={'dessert'}
                      sortDirection={'asc'}
                    // sort={() => console.log('sorting')}
                    // columns={[
                    //   {
                    //     width: 200,
                    //     flexGrow: 1,
                    //     label: 'Dessert (100g serving)',
                    //     dataKey: 'dessert',
                    //     disableSort: false
                    //   },
                    //   {
                    //     width: 120,
                    //     label: 'Calories\u00A0(g)',
                    //     dataKey: 'calories',
                    //     numeric: true,
                    //   },
                    //   {
                    //     width: 120,
                    //     label: 'Fat\u00A0(g)',
                    //     dataKey: 'fat',
                    //     numeric: true,
                    //   },
                    //   {
                    //     width: 120,
                    //     label: 'Carbs\u00A0(g)',
                    //     dataKey: 'carbs',
                    //     numeric: true,
                    //   },
                    //   {
                    //     width: 120,
                    //     label: 'Protein\u00A0(g)',
                    //     dataKey: 'protein',
                    //     numeric: true,
                    //   },
                    // ]}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>)
    ;
};
export default memo(Tables);
