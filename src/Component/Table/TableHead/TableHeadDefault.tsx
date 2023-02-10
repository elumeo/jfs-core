import React, { useMemo } from 'react';
import { TableCell, TableSortLabel, SortDirection, Box, SxProps, TableCellProps, Typography } from '@mui/material';
import { visuallyHiddenStyle } from 'Component/Table/VirtualizedTable';
import { grey } from '@mui/material/colors';
import { apatith } from 'Constant/Color';

const sortingStyles: SxProps = {
  backgroundColor: grey[200],
  borderRadius: '4px 4px 0 0',
}

export type TableHeadDefaultProps = TableCellProps & {
  height?: number;
  isNumeric?: boolean;
  disableSort?: boolean;
  sortBy?: string;
  sortDirection?: SortDirection;
  label?: React.ReactNode;
  dataKey: string;
};

const TableHeadDefault: React.FC<TableHeadDefaultProps> = ({ height = 48, isNumeric = false, disableSort = false, sortBy, sortDirection, onClick, label, dataKey, ...rest }) => {
  const isActiveSort = sortBy === dataKey
  const color = isActiveSort || !disableSort
    ? apatith.main
    : 'inherit'
  const styles = useMemo<SxProps>(
    () => (
      {
        ...(isActiveSort ? sortingStyles : {}),
        height: height,
        p: 1,
        maxWidth: '100%'
      }
    ),
    [sortBy, isActiveSort, height]
  );
  const mapSortDirection = (sortDirection: SortDirection) =>
    `${sortDirection}`.toLowerCase() === 'asc'
      ? 'asc'
      : 'desc';
  const sort: TableCellProps['onClick'] = (e) => disableSort || onClick(e)
  return <TableCell
    variant='head'
    sx={styles}
    align={isNumeric || false ? 'right' : 'left'}
    onClick={sort}
    {...rest}
  >
    {disableSort !== true &&
      <TableSortLabel
        active={isActiveSort}
        direction={isActiveSort
          ? mapSortDirection(sortDirection)
          : 'asc'}
        sx={{ color }}>
        <Typography fontWeight={600} variant='subtitle1' color={color}>{label}</Typography>
        {isActiveSort
          ? <Box
            component='span'
            sx={visuallyHiddenStyle}>
            {
              `${sortDirection}`.toLowerCase() === 'desc'
                ? 'sorted descending'
                : 'sorted ascending'
            }
          </Box>
          : null
        }
      </TableSortLabel>
    }
    {disableSort && <Typography fontWeight={600} variant='subtitle1'>{label}</Typography>}
  </TableCell>;
};

export default TableHeadDefault
