import React from 'react'
import { TableVirtuoso, TableVirtuosoProps, VirtuosoHandle, Components } from 'react-virtuoso'
import Table, { TableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { SortDirection } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow, { TableRowProps } from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { SxProps } from '@mui/material'
import { topas } from 'Constant/Color'

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

export const flexContainerStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box'
};

export const ellipsesStyle: SxProps = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

export const noOutlineStyles: SxProps = { outline: 'none' };
export const rowClickStyles: SxProps = { cursor: 'pointer' };
export const rowNoClickStyles: SxProps = { cursor: 'initial' };
const sort = <ItemData extends {}>(data: ItemData[], sortBy: keyof ItemData, sortDir: SortDirection, compare: (a: ItemData, b: ItemData) => -1 | 0 | 1): ItemData[] => {
  if (!sortBy || !sortDir) { return data }
  return data.sort((a, b) => {
    if (compare) { return compare(a, b) }
    if (a[sortBy] < b[sortBy]) { return sortDir === 'asc' ? -1 : 1 }
    if (a[sortBy] > b[sortBy]) { return sortDir === 'asc' ? 1 : -1 }
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
};
const VirtualizedTable = <ItemData extends {}>({
  data = [],
  sortBy,
  sortDirection,
  compare = (a, b) => a[sortBy] < b[sortBy] ? -1 : 1,
  filter = () => true,
  ...props
}: VirtualizedTableProps<ItemData>) => {

  const ref = React.useRef<VirtuosoHandle>(null)
  const _sorted = React.useMemo(
    () => sort(data.filter(filter), sortBy, sortDirection, compare)
    ,
    [data, sortBy, sortDirection, compare, filter]
  )

  const components: Components = React.useMemo(() => ({
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
    Table: (props: TableProps) => <Table {...props} sx={{ borderCollapse: 'separate' }} />,
    TableHead: TableHead,
    TableRow: (props: TableRowProps & { 'data-index': number }) => <TableRow sx={{ backgroundColor: props['data-index'] % 2 ? `${topas.main}20` : 'inherit' }} {...props} />,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
    ...props?.components,
  }), [props])
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
