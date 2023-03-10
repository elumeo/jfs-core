/* eslint-disable max-lines */
import React from 'react';
import {Box, Card, CardContent, CardHeader, Container, Grid, Link, SxProps, Table, TableBody, TableContainer, TableRow, TableHead as MuiTableHead, Typography} from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import VirtualizedTable from '../../Component/Table/VirtualizedTable';
import useSortParamsRouter from '../../Effect/useSortParamsRouter';
import Layout from '../../Component/App/Layout';
import * as TableApi from '../Mock/TableApi';
import {useIntl} from 'react-intl';
import {common} from '../../Constant/Color';
import TableCell from '../../Component/Table/TableCell';
import TableHead from '../../Component/Table/TableHead';
import {addToastAction} from '../../Store/Action';
import {useDispatch} from 'react-redux';

const sxs: Record<string, SxProps> = {
  TableBasic: {minWidth: 650},
  TableBasicContainer: {maxHeight: 440},
};

const Tables = () => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl()
  const [denseBasicTable, setDenseBasicTable] = React.useState(false)
  const [stickyBasicTable, setStickyBasicTable] = React.useState(true)
  const [{sortBy, sortDirection}, setSort] = useSortParamsRouter<TableApi.Row>({sortBy: 'dessert', sortDirection: 'asc'})
  const [denseVirtualizedTable, setDenseVirtualizedTable] = React.useState(false)
  const toggleDenseBasicTable = () => setDenseBasicTable(old => !old);
  const toggleStickyBasicTable = () => setStickyBasicTable(old => !old);
  const toggleDenseVirtualizedTable = () => setDenseVirtualizedTable(old => !old);
  const header = <TableRow sx={{backgroundColor: common.white, zIndex: 10}}>
    {TableApi.Columns.map((key) => {
        if (key == 'select') {
          return <TableHead.Select
            size={denseVirtualizedTable ? 'small' : 'medium'}
            width={TableApi.widthByColumn[key]}
            checked={false}
            id={'test'}
            name={'###all###'}
            value={'###all###'}
            key={key}
            onChange={() => dispatch(addToastAction({contentMessage: 'dynamic select is not implemented in showcase'}))}
          />
        }
        return <TableHead.Default
          align={'left'}
          dataKey={key}
          key={key}
          sortBy={sortBy}
          size={denseVirtualizedTable ? 'small' : 'medium'}
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
              <FormControlLabel control={<Switch onChange={toggleStickyBasicTable} checked={stickyBasicTable}/>} label='Sticky'/>
              <FormControlLabel control={<Switch onChange={toggleDenseBasicTable} checked={denseBasicTable}/>} label='Dense'/>
              <TableContainer sx={sxs.TableBasicContainer}>
                <Table sx={sxs.TableBasic} aria-label='simple table' size={denseBasicTable ? 'small' : 'medium'} stickyHeader={stickyBasicTable}>
                  <MuiTableHead>{header}</MuiTableHead>
                  <TableBody>
                    {TableApi.rowsBasicTable.map((row, index) => (
                      <TableRow key={row.name + '_' + index} hover>
                        <TableCell.Select
                          align={'left'}
                          value={row.select}
                          checked={false}
                          onChange={() => dispatch(addToastAction({contentMessage: 'dynamic select is not implemented in showcase'}))}
                        />
                        <TableCell.Default>{row.name}</TableCell.Default>
                        <TableCell.Default>{row.calories}</TableCell.Default>
                        <TableCell.Default>{row.fat}</TableCell.Default>
                        <TableCell.Default>{row.carbs}</TableCell.Default>
                        <TableCell.Default>{row.protein}</TableCell.Default>
                        <TableCell.DateTime value={row.dateTime} asTwoLines={false}/>
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
                  <FormControlLabel control={<Switch onChange={toggleDenseVirtualizedTable} checked={denseVirtualizedTable}/>}
                                    label='Dense (Changes headerHeight and rowHeight)'/>
                </Grid>
                <Grid item xs>
                  <VirtualizedTable
                    data={TableApi.rowData}
                    tableSize={denseVirtualizedTable ? 'small' : 'medium'}
                    fixedHeaderContent={() => header}
                    itemContent={(index, row) => (
                      <>
                        <TableCell.Select
                          align={'left'}
                          value={row.select}
                          checked={false}
                          onChange={() => dispatch(addToastAction({contentMessage: 'dynamic select is not implemented in showcase'}))}
                        />
                        <TableCell.Default>{row.dessert}</TableCell.Default>
                        <TableCell.Default>{row.carbs}</TableCell.Default>
                        <TableCell.Default>{row.calories}</TableCell.Default>
                        <TableCell.Default>{row.fat}</TableCell.Default>
                        <TableCell.Default>{row.protein}</TableCell.Default>
                        <TableCell.DateTime value={row.dateTime}/>
                      </>
                    )}
                    sortBy={sortBy}
                    sortDirection={sortDirection}
                    tableRowProps={{hover: true, /* sx: {'&:nth-of-type(odd)': {backgroundColor: 'lightcyan',}} */}}
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
