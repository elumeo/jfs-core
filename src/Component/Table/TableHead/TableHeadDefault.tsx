import React, { useMemo } from 'react';
import { TableCell, TableSortLabel, SortDirection, Box, SxProps, TableCellProps, Typography, TableSortLabelProps } from '@mui/material';
import { visuallyHiddenStyle } from 'Component/Table/VirtualizedTable';
import { grey } from '@mui/material/colors';
import { apatith } from 'Constant/Color';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const sortingStyles: SxProps = {
  backgroundColor: grey[200],
  borderRadius: `${definition.spacing(.5)} ${definition.spacing(.5)} 0 0`
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
        maxWidth: '100%'
      }
    ),
    [sortBy, isActiveSort, height]
  );

  const sort: TableCellProps['onClick'] = (e) => disableSort || onClick(e)
  return <TableCell
    variant='head'
    sx={styles}
    align={isNumeric ? 'right' : 'left'}
    onClick={sort}
    {...rest}
  >
    {disableSort !== true &&
      <TableSortLabel
        active={isActiveSort}
        direction={sortDirection as TableSortLabelProps['direction']}
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
  </TableCell >;
};

export default TableHeadDefault
