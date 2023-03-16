/* eslint-disable max-lines */
import React, {useCallback, useEffect} from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Link,
  SxProps,
  Table as MuiTable,
  TableBody,
  TableContainer,
  TableRow,
  TableHead as MuiTableHead,
  Typography, TableProps, FormControl, MenuItem, SelectProps, CircularProgress
} from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import VirtualizedTable from '../../Component/Table/VirtualizedTable';
import useSortParamsRouter from '../../Effect/useSortParamsRouter';
import Layout from '../../Component/App/Layout';
import * as TableApi from '../Mock/TableApi';
import {useIntl} from 'react-intl';
import {common} from '../../Constant/Color';
import Table from '../../Component/Table';
import {addToastAction} from '../../Store/Action';
import {useDispatch} from 'react-redux';
import Select from '@mui/material/Select';
import Grid2 from '@mui/material/Unstable_Grid2';

const sxs: Record<string, SxProps> = {
  TableBasic: {minWidth: 650},
  TableBasicContainer: {maxHeight: 440},
};

const Tables = () => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl()
  const [sizeBasicTable, setSizeBasicTable] = React.useState<TableProps['size']>('medium')
  const [stickyBasicTable, setStickyBasicTable] = React.useState(true)
  const [{sortBy, sortDirection}, setSort] = useSortParamsRouter<TableApi.Row>({sortBy: 'dateTime', sortDirection: 'asc'})
  const [sizeVirtualizedTable, setSizeVirtualizedTable] = React.useState<TableProps['size']>('medium')
  const [virtualizedTableData, setVirtualizedTableData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const toggleStickyBasicTable = () => setStickyBasicTable(old => !old);
  const onChangeBasicSize: SelectProps<TableProps['size']>['onChange'] = (event) => setSizeBasicTable(event.target.value as TableProps['size']);
  const onChangeVirtualizedSize: SelectProps<TableProps['size']>['onChange'] = (event) => setSizeVirtualizedTable(event.target.value as TableProps['size']);

  const loadMore = useCallback(() => {
    if (virtualizedTableData.length >= 200) {
      setIsLoading(false);
      return null;
    }
    setIsLoading(true);
    return setTimeout(() => {
      setVirtualizedTableData([...virtualizedTableData, ...TableApi.loadRowData(50)]);
      setIsLoading(false);
    }, 2000)
  }, [virtualizedTableData, setIsLoading])

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout)
  }, []);

  const header = <TableRow sx={{backgroundColor: common.white, zIndex: 10}}>
    {TableApi.Columns.map((key) => {
        if (key == 'select') {
          return <Table.Head.Select
            size={sizeVirtualizedTable}
            width={TableApi.widthByColumn[key]}
            checked={false}
            id={'test'}
            name={'###all###'}
            value={'###all###'}
            key={key}
            onChange={() => dispatch(addToastAction({contentMessage: 'dynamic select is not implemented in showcase'}))}
          />
        }
        return <Table.Head.Default
          align={'left'}
          dataKey={key}
          key={key}
          sortBy={sortBy}
          size={sizeVirtualizedTable}
          width={TableApi.widthByColumn[key]}
          onClick={() => {
            setSort({
              sortBy: key as keyof TableApi.Row,
              sortDirection: sortDirection === 'asc' ? 'desc' : 'asc'
            })
          }}
          sortDirection={sortDirection}
          disableSort={!TableApi.sortableColumns.includes(key)}
          label={formatMessage({id: `showcase.table.header.${key}`})}
        />
      }
    )}
  </TableRow>
  return <Layout navigation={<AppNavigation/>}>
    <Container disableGutters maxWidth={false}>
      <Grid container direction={'column'} spacing={1}>
        <Grid item xs>
          <Card>
            <CardHeader title='Basic Table'/>
            <CardContent>
              <Typography>When making the table header sticky it becomes more highlighted (default app background color). The sticky header should be the default
                behaviour.</Typography>
              <Grid2 container spacing={2} pt={1} pb={1}>
                <Grid2>
                  <FormControl variant={'standard'}>
                    <Select<TableProps['size']> value={sizeBasicTable} onChange={onChangeBasicSize}>
                      <MenuItem value={'small'}>small</MenuItem>
                      <MenuItem value={'medium'}>medium</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
                <Grid2>
                  <FormControlLabel control={<Switch onChange={toggleStickyBasicTable} checked={stickyBasicTable}/>} label='Sticky'/>
                </Grid2>
              </Grid2>
              <TableContainer sx={sxs.TableBasicContainer}>
                <MuiTable sx={sxs.TableBasic} aria-label='simple table' size={sizeBasicTable} stickyHeader={stickyBasicTable}>
                  <MuiTableHead>{header}</MuiTableHead>
                  <TableBody>
                    {TableApi.rowsBasicTable.map((row, index) => (
                      <TableRow key={row.name + '_' + index} hover>
                        <Table.Cell.Select
                          align={'left'}
                          value={row.select}
                          checked={false}
                          onChange={() => dispatch(addToastAction({contentMessage: 'dynamic select is not implemented in showcase'}))}
                        />
                        <Table.Cell.Default>{row.name}</Table.Cell.Default>
                        <Table.Cell.Default>{row.calories}</Table.Cell.Default>
                        <Table.Cell.Default>{row.fat}</Table.Cell.Default>
                        <Table.Cell.Default>{row.carbs}</Table.Cell.Default>
                        <Table.Cell.Default>{row.protein}</Table.Cell.Default>
                        <Table.Cell.DateTime value={row.dateTime} asTwoLines={false}/>
                      </TableRow>
                    ))}
                  </TableBody>
                </MuiTable>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card>
            <CardHeader title='Virtualized Table'/>
            <Box component={CardContent} height={'600px'}>
              <Grid container direction={'column'} style={{height: '100%'}}>
                <Grid item>
                  <Typography>Virtualized Tables are based on the <Link target={'_blank'} href={'https://virtuoso.dev/'}>react-virtuoso</Link> library. This
                    lib is headless, so it requires authors to handle their own components and styles.
                    The Core exports a simple, generically typed MUI wrapper, with sorting behaviour.
                    Also the <i>dense</i> parameter is introduced on the table, so we can adjust the <i>headerHeight</i> and <i>rowHeight</i> easily with defined values.
                    The sticky behaviour is
                    different as well and cannot be disabled. Check the different scrollbar behaviour on the right side.</Typography>
                  <FormControl variant={'standard'}>
                    <Select<TableProps['size']> value={sizeVirtualizedTable} onChange={onChangeVirtualizedSize}>
                      <MenuItem value={'small'}>small</MenuItem>
                      <MenuItem value={'medium'}>medium</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs>
                  <VirtualizedTable
                    tableProps={{
                      size: sizeVirtualizedTable,
                    }}
                    tableRowProps={{
                      hover: true,
                      /* sx: {'&:nth-of-type(odd)': {backgroundColor: 'lightcyan',}} */
                    }}
                    data={virtualizedTableData}
                    fixedHeaderContent={() => header}
                    fixedFooterContent={() => isLoading
                      ? <CircularProgress size={20}/>
                      : <Typography variant={'body1'} textAlign={'center'}>{formatMessage({id: 'table.noMoreResults'})}</Typography>
                    }
                    itemContent={(index, row) => (
                      <>
                        <Table.Cell.Select
                          align={'left'}
                          value={row.select}
                          checked={false}
                          onChange={() => dispatch(addToastAction({contentMessage: 'dynamic select is not implemented in showcase'}))}
                        />
                        <Table.Cell.Default size={sizeVirtualizedTable}>{row.dessert}</Table.Cell.Default>
                        <Table.Cell.Default size={sizeVirtualizedTable}>{row.carbs}</Table.Cell.Default>
                        <Table.Cell.Default size={sizeVirtualizedTable}>{row.calories}</Table.Cell.Default>
                        <Table.Cell.Default size={sizeVirtualizedTable}>{row.fat}</Table.Cell.Default>
                        <Table.Cell.Default size={sizeVirtualizedTable}>{row.protein}</Table.Cell.Default>
                        <Table.Cell.DateTime size={sizeVirtualizedTable} value={row.dateTime}/>
                      </>
                    )}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    endReached={loadMore}
                    overscan={50}
                    components={{
                      EmptyPlaceholder: undefined
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Layout>;
};
export default Tables
