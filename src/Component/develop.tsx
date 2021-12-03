/* eslint-disable max-lines */
import React, { CSSProperties, useCallback, useMemo, useState } from 'react';
import {
  Button, ButtonProps,
  Card,
  CardContent,
  Chip,
  Grid, IconButton, InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, MenuItem,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography
} from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { getCurrency } from 'Utilities/Format/Currency';
import { useDispatch } from 'react-redux';
import * as Action from 'Store/Action';
import { v4 as uuid } from 'uuid';
import { VirtualizedTable } from 'Component/Table';
import { Index, TableCellProps, TableProps } from 'react-virtualized';
import TextFieldClearButton, { TextFieldClearButtonProps } from 'Component/TextFieldClearButton';
import { ContentEllipseMode } from 'Component/Table/TableCell/TableCellDefault';
import { TableCellDateTime, TableCellDateTimeRange, TableCellDefault } from 'Component/Table/TableCell';
import { ButtonProgress } from 'Component/Button';
import { AppCardHeader, AppCardContent } from 'Component/Card';
import { TableRowLoading } from 'Component/Table/TableRow';
import SelectClearButton, { SelectClearButtonProps } from 'Component/SelectClearButton';
import SearchIcon from '@material-ui/icons/Search';
import { CustomerCard, FilterReset } from 'Component/Icon';
import DatePicker from 'Component/DatePicker';
import { ColumnData } from 'Component/Table/VirtualizedTable';
import { DateTimeRangeCellProps } from 'Types/Table/DateTimeRangeCellProps';
import WarningIcon from '@material-ui/icons/Warning';
import TableCellSelect from 'Component/Table/TableCell/TableCellSelect';
import TableHeadSelect from 'Component/Table/TableHead/TableHeadSelect';
// import { CSSProperties } from '@material-ui/core/styles/withStyles';

type DataVirtualizedTable = {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  datetimeRange: DateTimeRangeCellProps;
  datetime: Date;
}

type SampleVirtualizedTable = [string, number, number, number, DateTimeRangeCellProps, Date?];

const sample: SampleVirtualizedTable[] = [
  ['Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt Frozen yoghurt', 159, 6.0, 24, {
    start: null,
    end: null,
    isLiveShow: false
  }, null],
  ['Ice cream sandwich', 237, 9.0, 37, {start: new Date(), end: new Date(), isLiveShow: false}, new Date()],
  ['Eclair', 262, 16.0, 24, {start: new Date(2021, 9, 23, 8, 0, 15), end: new Date(), isLiveShow: false}, new Date()],
  ['Cupcake', 305, 3.7, 67, {start: new Date(), end: new Date(), isLiveShow: false}, new Date()],
  ['Gingerbread', 356, 16.0, 49, {start: new Date(), end: new Date(), isLiveShow: false}, new Date()]
];

const createDataVirtualizedTable = (id: number, dessert: string, calories: number, fat: number, carbs: number, datetimeRange: DateTimeRangeCellProps, datetime?: Date): DataVirtualizedTable => ({ id, dessert, calories, fat, carbs, datetimeRange, datetime });

const rows: DataVirtualizedTable[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createDataVirtualizedTable(i, ...randomSelection));
}

const columns: ColumnData[] = [
  {
    width: 50,
    dataKey: 'select',
    disableSort: true,
    headerRenderer: (cellProps: TableCellProps) => <TableHeadSelect checked={false} onChange={console.log} />,
    cellRenderer: (cellProps: TableCellProps) => <TableCellSelect checked={false} value={cellProps.cellData} onChange={console.log} />
  },
  {
    width: (width: number) => width - (120 * 4),
    label: 'Dessert (100g serving)',
    dataKey: 'dessert',
    disableSort: true,
    cellRenderer: (cellProps: TableCellProps) => <TableCellDefault cellData={cellProps.cellData} contentEllipseMode={ContentEllipseMode.Lines} contentEllipseLines={2} />
  },
  {
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
  },
  {
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
  },
  {
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs',
  },
  {
    width: 220,
    label: 'Datum (Range)',
    dataKey: 'datetimeRange',
    cellRenderer: cellProps => <TableCellDateTimeRange cellData={cellProps.cellData} />
  },
  {
    width: 180,
    label: 'Datum',
    dataKey: 'datetime',
    cellRenderer: cellProps => <TableCellDateTime cellData={cellProps.cellData} />
  }
];
const textFieldInputProps = { startAdornment: <InputAdornment position={'start'}><SearchIcon /></InputAdornment> };

const selectMenuItems = [
  <MenuItem value={'test 1'} key={'menu-item-1'}>Test 1</MenuItem>,
  <MenuItem value={'test 2'} key={'menu-item-2'}>Test 2</MenuItem>,
  <MenuItem value={'test 3'} key={'menu-item-3'}>Test 3</MenuItem>,
  <MenuItem value={'test 4'} key={'menu-item-4'}>Test 4</MenuItem>
];

const Develop: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [testTextFieldValue, setTestTextFieldValue] = useState('');
  const [testSelectValue, setTestSelectValue] = useState('');
  const [testDatePickerValue, setTestDatePickerValue] = useState<Date>(null);
  const noRowsRenderer = useCallback(() => <TableRowLoading />, []);
  const rowGetter = useCallback((row: Index) => rows[row.index], []);
  const handleTextFieldUpdate: TextFieldClearButtonProps['onChange'] = useCallback(event => setTestTextFieldValue(event === null ? '' : event.target.value), []);
  const handleSelectUpdate: SelectClearButtonProps['onChange'] = useCallback(event => setTestSelectValue(event === null ? '' : event.target.value as string), []);
  const handleOnClickNotification: ButtonProps['onClick'] = useCallback(() => dispatch(Action.addNotification({
    id: uuid(),
    title: 'Error',
    subtitle: 'Join Room (action.payload.name)',
    content: 'MESSAGE',
    variant: 'error'
  })), []);
  const handleOnClickToast: ButtonProps['onClick'] = useCallback(() => dispatch(Action.addToastAction({
    contentMessage: 'Toast Test',
    dismissLabel: 'Dismiss',
    isSuccess: true
  })), []);

  return (
    <div style={{ margin: theme.spacing(1) }}>
      <Card>
        <AppCardHeader title={'Test'} titleIcon={<WarningIcon />} onRefresh={console.log} />
        <AppCardContent>
          Das ist der Inhalt
          <IconButton size={'small'} color={'secondary'}><FilterReset/></IconButton>
        </AppCardContent>
      </Card>
      <div style={{ marginTop: theme.spacing(1) }}>
        <Card>
          <CardContent style={{ height: 600 }}>
            <VirtualizedTable
              showRowHoverHighlight
              rowHeight={50}
              rowCount={rows.length}
              rowGetter={rowGetter}
              noRowsRenderer={noRowsRenderer}
              sortBy={'calories'}
              sortDirection={'ASC'}
              columns={columns}
            />
          </CardContent>
        </Card>
      </div>
      <Grid container spacing={1} alignItems={'center'}>
        <Grid item>
          {/*<DatePicker*/}
          {/*  label={'DatePicker'}*/}
          {/*  onChange={console.log}*/}
          {/*  value={testDatePickerValue}*/}
          {/*  isClearable={false}*/}
          {/*/>*/}
        </Grid>
        <Grid item>
          <TextFieldClearButton
            label={'Textfield'}
            onChange={handleTextFieldUpdate}
            value={testTextFieldValue}
            clearButtonSize={'small'}
            InputProps={textFieldInputProps}
          />
        </Grid>
        <Grid item>
          {/*<TextFieldClearButton*/}
          {/*  disabled*/}
          {/*  label={'Textfield'}*/}
          {/*  onChange={handleTextFieldUpdate}*/}
          {/*  value={testTextFieldValue}*/}
          {/*  clearButtonSize={'small'}*/}
          {/*/>*/}
        </Grid>
        <Grid item>
          {/*<SelectClearButton*/}
          {/*  label={'Select with Clear Button'}*/}
          {/*  onChange={handleSelectUpdate}*/}
          {/*  value={testSelectValue}*/}
          {/*  clearButtonSize={'small'}*/}
          {/*>{selectMenuItems}</SelectClearButton>*/}
        </Grid>
        <Grid item>
          <CustomerCard />
        </Grid>
        <Grid item>
          <Button onClick={handleOnClickNotification}>Notification</Button>
        </Grid>
        <Grid item>
          <Button onClick={handleOnClickToast}>Toast</Button>
        </Grid>
        <Grid item>
          <ButtonProgress inProgress onClick={handleOnClickToast}>Toast</ButtonProgress>
        </Grid>
      </Grid>
      <div style={{ marginTop: theme.spacing(1) }}>
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
      </div>
      <div style={{ marginTop: theme.spacing(1) }}>
        <Grid container>
          <Grid item>
            <Typography
              style={{ margin: theme.spacing(1), padding: theme.spacing(1), backgroundColor: theme.palette.info.main, color: theme.palette.getContrastText(theme.palette.info.main) }}>Info</Typography>
          </Grid>
          <Grid item>
            <Typography style={{
              margin: theme.spacing(1),
              padding: theme.spacing(1),
              backgroundColor: theme.palette.error.main,
              color: theme.palette.getContrastText(theme.palette.error.main)
            }}>Error</Typography>
          </Grid>
          <Grid item>
            <Typography style={{
              margin: theme.spacing(1),
              padding: theme.spacing(1),
              backgroundColor: theme.palette.warning.main,
              color: theme.palette.getContrastText(theme.palette.warning.main)
            }}>Warning</Typography>
          </Grid>
          <Grid item>
            <Typography style={{
              margin: theme.spacing(1),
              padding: theme.spacing(1),
              backgroundColor: theme.palette.success.main,
              color: theme.palette.getContrastText(theme.palette.success.main)
            }}>Success</Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: theme.spacing(1) }}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper>
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
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper>
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
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item><Chip label={'label label1'} icon={<ContactPhoneIcon />} /></Grid>
                  <Grid item><Chip label={'label label2'} clickable icon={<AccountCircleIcon />} /></Grid>
                  <Grid item><Chip size={'small'} label={'label label3'} clickable icon={<AccountCircleIcon />} /></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: theme.spacing(1) }}>
        <Card>
          <CardContent style={{ height: 300 }}>
            <TableContainer style={{ maxHeight: 300 }}>
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
                  </TableRow>)}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Develop;
