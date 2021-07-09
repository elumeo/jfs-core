import React from 'react';
import { Box, Card, Paper, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Theme, Typography, TypographyVariant, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import WarningIcon from '@material-ui/icons/Warning';
import { VirtualizedTable } from 'Component/Table';
import { Index } from 'react-virtualized';
import PriceField from 'Component/PriceInput/PriceField';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDateTimePicker, KeyboardTimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

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

const variants: TypographyVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline'
];

const Develop = () => {
  const theme = useTheme<Theme>();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return <Box>
    <Box component={Paper} p={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={1}>
          <Grid item>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='dd/MM/yyyy'
              id='date-picker-inline'
              label='Date picker inline'
              value={selectedDate}
              onChange={(date) => handleDateChange(date as any)}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Grid>
          <Grid item>
            <KeyboardTimePicker
              ampm={false}
              id='time-picker'
              label='Time picker'
              value={selectedDate}
              onChange={(date) => handleDateChange(date as any)}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
            />
          </Grid>
          <Grid item>
            <KeyboardDateTimePicker
              // disableToolbar
              ampm={false}
              variant='inline'
              format='dd/MM/yyyy HH:mm'
              id='date-picker-inline'
              label='Datetime picker inline'
              value={selectedDate}
              onChange={(date) => handleDateChange(date as any)}
              KeyboardButtonProps={{
                'aria-label': 'change date and time',
              }}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </Box>
    {/*<Box>*/}
    {/*  <Container>*/}
    {/*    <Card>*/}
    {/*      <CardContent>*/}
    {/*        {variants.map((variant) => <Box key={variant}><Typography variant={variant as TypographyVariant}>variant='{variant}'</Typography></Box>)}*/}
    {/*      </CardContent>*/}
    {/*    </Card>*/}
    {/*    <List>*/}
    {/*      <ListItem>*/}
    {/*        <ListItemIcon><WarningIcon /></ListItemIcon>*/}
    {/*        <ListItemText>Text</ListItemText>*/}
    {/*      </ListItem>*/}
    {/*    </List>*/}
    {/*  </Container>*/}
    {/*</Box>*/}
    {/*<Box width={'100%'} height={'100%'} bgcolor={theme.palette.rubin.main}>Hallo Welt!</Box>*/}
    {/*<Box padding={1} height={'100%'}>*/}
    {/*  <VirtualizedTable*/}
    {/*    showRowHoverHighlight*/}
    {/*    rowCount={rows.length}*/}
    {/*    rowGetter={(row: Index) => rows[row.index]}*/}
    {/*    sortBy={'dessert'}*/}
    {/*    sortDirection={'ASC'}*/}
    {/*    sort={() => console.log('sorting')}*/}
    {/*    columns={[*/}
    {/*      {*/}
    {/*        width: 200,*/}
    {/*        flexGrow: 1,*/}
    {/*        label: 'Dessert',*/}
    {/*        dataKey: 'dessert',*/}
    {/*        disableSort: false*/}
    {/*      },*/}
    {/*      {*/}
    {/*        width: 120,*/}
    {/*        label: 'Calories\u00A0(g)',*/}
    {/*        dataKey: 'calories',*/}
    {/*        numeric: true,*/}
    {/*      },*/}
    {/*      {*/}
    {/*        width: 120,*/}
    {/*        label: 'Fat\u00A0(g)',*/}
    {/*        dataKey: 'fat',*/}
    {/*        numeric: true,*/}
    {/*      },*/}
    {/*      {*/}
    {/*        width: 120,*/}
    {/*        label: 'Carbs\u00A0(g)',*/}
    {/*        dataKey: 'carbs',*/}
    {/*        numeric: true,*/}
    {/*      },*/}
    {/*      {*/}
    {/*        width: 120,*/}
    {/*        label: 'Protein\u00A0(g)',*/}
    {/*        dataKey: 'protein',*/}
    {/*        numeric: true,*/}
    {/*      },*/}
    {/*    ]}*/}
    {/*  />*/}
    {/*</Box>*/}
  </Box>;
};

export default Develop;
