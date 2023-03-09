import React from 'react'
import { TableVirtuoso, TableVirtuosoProps, VirtuosoHandle, Components } from 'react-virtuoso'
import Table, { TableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { SortDirection } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow, { TableRowProps } from '@mui/material/TableRow'
import {Box, SxProps} from '@mui/material'

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
  if (!sortBy) { return data }
  return data.sort((a, b) => {
    if (compare) { return compare(a, b) }
    return 0
  })
}
export type VirtualizedTableProps<ItemData> = Partial<TableVirtuosoProps<ItemData, unknown>> & {
  data: ItemData[];
  sortBy?: keyof ItemData
  sortDirection?: SortDirection
  compare?: (a: ItemData, b: ItemData) => -1 | 0 | 1,
  filter?: (item: ItemData) => boolean,
  setSort?: ({ sortBy, sortDirection }: { sortBy: keyof ItemData, sortDirection: SortDirection }) => void
  tableSize?: TableProps['size'],
  tableRowProps?: TableRowProps,
};
const VirtualizedTable = <ItemData extends {}>({
  data = [],
  tableSize = 'small',
  sortBy,
  sortDirection,
  compare = (a, b) => (a[sortBy] < b[sortBy])
    ? -1
    : a[sortBy] === b[sortBy]
      ? 0
      : 1,
  filter = () => true,
  tableRowProps,
  ...props
}: VirtualizedTableProps<ItemData>) => {

  const ref = React.useRef<VirtuosoHandle>(null)
  const _sorted = React.useMemo(
    () => {
      const sorted = sort(data.filter(filter), sortBy, compare)
      return sortDirection === 'desc'
        ? sorted.reverse()
        : sorted
    }
    ,
    [data, sortBy, sortDirection, compare, filter]
  )
  const components: Components = React.useMemo(
    () => (
      {
        Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Box} {...props} ref={ref} />),
        Table: (props: TableProps) => <Table {...props} size={tableSize} sx={{ borderCollapse: 'separate' }} />,
        TableHead: TableHead,
        TableRow: (props: TableRowProps & { 'data-index': number }) => <TableRow {...props} {...tableRowProps} />,
        TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
        ...props?.components,
      }
    ),
    [props?.components, tableSize, tableRowProps]
  )
  return (
    <TableVirtuoso
      ref={ref}
      data={_sorted}
      components={components}
      overscan={20}
      {...props}
    />
  )
}

export default VirtualizedTable
