import React from 'react'
import {TableVirtuoso, TableVirtuosoProps, VirtuosoHandle, TableComponents,} from 'react-virtuoso'
import {SortDirection} from '@mui/material/TableCell'
import Table from './Table'
import TableContainer from './Container'
import NoResults from './Row/NoResults'
import {SxProps, TableBody, TableFooterProps, TableHead, TableProps, TableRow} from '@mui/material'
import {TableRowProps} from '@mui/material/TableRow';
import Footer from './Row/Footer'

export const visuallyHiddenStyle: SxProps = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: 20,
  width: 1
};


export const ellipsesStyle: SxProps = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

const sort = <ItemData extends {}>(data: ItemData[], sortBy: keyof ItemData, compare: (a: ItemData, b: ItemData) => -1 | 0 | 1): ItemData[] => {
  if (!sortBy) {
    return data
  }
  return data.sort((a, b) => {
    if (compare) {
      return compare(a, b)
    }
    return 0
  })
}
export type Props<ItemData> = Partial<TableVirtuosoProps<ItemData, unknown>> & {
  data: ItemData[];
  sortBy?: keyof ItemData
  sortDirection?: SortDirection
  compare?: (a: ItemData, b: ItemData) => -1 | 0 | 1,
  filter?: (item: ItemData) => boolean,
  setSort?: ({sortBy, sortDirection}: { sortBy: keyof ItemData, sortDirection: SortDirection }) => void,
  tableProps?: TableProps;
  tableRowProps?: TableRowProps;
};

const VirtualizedTable = <ItemData extends {}>({
                                                 data = [],
                                                 sortBy,
                                                 sortDirection,
                                                 compare = (a, b) => (a[sortBy] < b[sortBy]) ? -1 : a[sortBy] === b[sortBy] ? 0 : 1,
                                                 filter = () => true,
                                                 tableProps,
                                                 tableRowProps,
                                                 components: propComponents,
                                                 ...props
                                               }: Props<ItemData>) => {

  const ref = React.useRef<VirtuosoHandle>(null);

  const _sorted = React.useMemo(
    () => {
      const sorted = sort(data.filter(filter), sortBy, compare)
      return sortDirection === 'desc'
        ? sorted.reverse()
        : sorted
    },
    [data, sortBy, sortDirection, compare, filter]
  );

  const components: TableComponents = React.useMemo(
    () => ({
      EmptyPlaceholder: NoResults,
      Scroller: TableContainer,
      Table: (props: TableProps) => <Table {...props} {...tableProps} />,
      TableHead,
      TableRow: React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => <TableRow {...props} {...tableRowProps} ref={ref}/>),
      TableBody,
      TableFoot: React.forwardRef<HTMLTableSectionElement, TableFooterProps>((props, ref) => <Footer {...props} ref={ref}/>),
      ...propComponents
    }),
    [propComponents]
  );
  return <TableVirtuoso
    ref={ref}
    data={_sorted}
    components={components}
    overscan={20}
    {...props}
  />;
}

export default VirtualizedTable;
