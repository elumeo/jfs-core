/* eslint-disable max-lines */
import React from 'react';
import { Box, List, ListItem, Paper, Chip, ListItemIcon, ListItemText, Grid, Button, CardContent, Card, Table, TableHead, TableContainer, TableRow, TableCell, TableBody } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { getCurrency } from 'Utilities/Format/Currency';
import { useDispatch } from 'react-redux';
import * as Action from 'Store/Action';
import { v4 as uuid } from 'uuid';
import { VirtualizedTable } from 'Component/Table';
import { Index } from 'react-virtualized';

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
  ['Gingerbread', 356, 16.0, 49, 3.9]
];

const createDataVirtualizedTable = (
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): DataVirtualizedTable => ({ id, dessert, calories, fat, carbs, protein });

const rows: DataVirtualizedTable[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createDataVirtualizedTable(i, ...randomSelection));
}

const Develop: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box>
      <Button onClick={() => dispatch(Action.addNotification({
        id: uuid(),
        title: 'Error',
        subtitle: 'Join Room (action.payload.name)',
        content: 'MESSAGE',
        variant: 'error'
      }))}>Notification</Button>
      <Box m={1}>
        <List>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100, true, true, true)'}>
              {getCurrency('EUR', 100, true, true, true)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100, true, true, false)'}>
              {getCurrency('EUR', 100, true, true, false)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.00, true, true, true)'}>
              {getCurrency('EUR', 100.00, true, true, true)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.00, true, true, false)'}>
              {getCurrency('EUR', 100.00, true, true, false)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.5, true, true, true)'}>
              {getCurrency('EUR', 100.5, true, true, true)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.5, true, true, false)'}>
              {getCurrency('EUR', 100.5, true, true, false)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.50, true, true, true)'}>
              {getCurrency('EUR', 100.50, true, true, true)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.50, true, true, false)'}>
              {getCurrency('EUR', 100.50, true, true, false)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.75, true, true, true)'}>
              {getCurrency('EUR', 100.75, true, true, true)}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText secondary={'getCurrency(\'EUR\', 100.75, true, true, false)'}>
              {getCurrency('EUR', 100.75, true, true, false)}
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Grid container>
        <Grid item>
          <Box p={2} m={2} style={{ backgroundColor: theme.palette.info.main, color: theme.palette.getContrastText(theme.palette.info.main) }}>Info</Box>
        </Grid>
        <Grid item>
          <Box p={2} m={2} style={{ backgroundColor: theme.palette.error.main, color: theme.palette.getContrastText(theme.palette.error.main) }}>Error</Box>
        </Grid>
        <Grid item>
          <Box p={2} m={2} style={{ backgroundColor: theme.palette.warning.main, color: theme.palette.getContrastText(theme.palette.warning.main) }}>Warning</Box>
        </Grid>
        <Grid item>
          <Box p={2} m={2} style={{ backgroundColor: theme.palette.success.main, color: theme.palette.getContrastText(theme.palette.success.main) }}>Success</Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <Box component={Paper} m={2}>
            <List dense>
              <ListItem button selected={true}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'primary111'} secondary={'secondary222'} />
              </ListItem>

              <ListItem button selected={false}>
                <ListItemIcon>
                  <ContactPhoneIcon />
                </ListItemIcon>
                <ListItemText primary={'primary222'} secondary={'secondary222'} />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box component={Paper} ml={0} m={2}>
            <List>
              <ListItem button selected={true}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'primary111'} secondary={'secondary222'} />
              </ListItem>

              <ListItem button selected={false}>
                <ListItemIcon>
                  <ContactPhoneIcon />
                </ListItemIcon>
                <ListItemText primary={'primary222'} secondary={'secondary222'} />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box component={Paper} ml={0} m={2} p={2}>
            <Chip label={'label label1'} icon={<ContactPhoneIcon />} />
            <Chip label={'label label2'} clickable icon={<AccountCircleIcon />} />

            <Chip size={'small'} label={'label label3'} clickable icon={<AccountCircleIcon />} />
          </Box>
        </Grid>
      </Grid>

      <Box m={1}>
        <Card>
          <CardContent style={{ height: 300 }}>
            <TableContainer style={{maxHeight: 300}}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {['calories', 'carbs', 'dessert', 'fat', 'id', 'protein'].map((column, index) => <TableCell key={'column-head-index-' + index}>{column}</TableCell>)}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => <TableRow key={'row-body-index' + index}>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.dessert}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>)}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>

      <Box m={1}>
        <Card>
          <CardContent style={{ height: 300 }}>
            <VirtualizedTable
              rowHeight={50}
              rowCount={rows.length}
              rowGetter={(row: Index) => rows[row.index]}
              sortBy={'calories'}
              sortDirection={'ASC'}
              columns={[
                {
                  // width: 200,
                  // flexGrow: 1,
                  width: (width: number) => width - (120 * 4),
                  label: 'Dessert (100g serving)',
                  dataKey: 'dessert',
                  disableSort: true,
                },
                {
                  width: 120,
                  label: 'Calories\u00A0(g)',
                  dataKey: 'calories',
                  numeric: true
                },
                {
                  width: 120,
                  label: 'Fat\u00A0(g)',
                  dataKey: 'fat',
                  numeric: true
                },
                {
                  width: 120,
                  label: 'Carbs\u00A0(g)',
                  dataKey: 'carbs',
                  numeric: true
                },
                {
                  width: 120,
                  label: 'Protein\u00A0(g)',
                  dataKey: 'protein',
                  numeric: true
                }
              ]}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Develop;
