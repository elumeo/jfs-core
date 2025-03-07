import React, { useMemo } from 'react';
import { TableCell, TableSortLabel, SortDirection, SxProps, TableCellProps, Typography, TableSortLabelProps, Theme } from '@mui/material';
import { visuallyHiddenStyle } from 'Component/Table/VirtualizedTable';
import { grey } from '@mui/material/colors';
import { apatith } from 'Constant/Color';

export const sortingStyles: SxProps = {
  backgroundColor: (theme: Theme) => theme.palette.mode === 'dark'
    ? grey[800] : grey[200]
  ,
  borderRadius: (theme: Theme) => `${theme.spacing(.5)} ${theme.spacing(.5)} 0 0`
}

export type Props = Omit<TableCellProps, 'onClick'> & {
  height?: number;
  isNumeric?: boolean;
  disableSort?: boolean;

  sortBy?: string;
  sortDirection?: SortDirection;
  label?: React.ReactNode;
  dataKey: string;
  onClick?: (sortBy: string, sortDirection: SortDirection) => void
};

const Default: React.FC<Props> = ({ height = 48, isNumeric = false, disableSort = false, sortBy, sortDirection, onClick, label, dataKey, width, sx, ...rest }) => {
  const isActiveSort = sortBy === dataKey
  const color = isActiveSort || !disableSort
    ? apatith.main
    : 'inherit'
  const styles = useMemo<SxProps>(() => (
    {
      ...(isActiveSort ? sortingStyles : {}),
      height: height,
      maxWidth: '100%',
      width: width,
      ...sx
    }
  ), [sortBy, isActiveSort, height, width, sx]);

  const sort: TableCellProps['onClick'] = () => disableSort || (onClick !== undefined && onClick(dataKey, isActiveSort ? (sortDirection === 'asc' ? 'desc' : 'asc') : 'asc'));
  return <TableCell
    variant="head"
    sx={styles}
    align={rest.align ? rest.align : isNumeric ? 'right' : 'left'}
    onClick={sort}
    {...rest}
  >
    {disableSort && <Typography fontWeight={600} variant="subtitle1">{label}</Typography>}
    {!disableSort && <TableSortLabel active={isActiveSort} direction={sortDirection as TableSortLabelProps['direction']} sx={{ color }}>
      <Typography fontWeight={600} lineHeight={1} variant="subtitle1" color={color}>{label}</Typography>
      {isActiveSort
        ? <Typography component="span" sx={visuallyHiddenStyle}>
          {`${sortDirection} `.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </Typography>
        : null
      }
    </TableSortLabel>}
  </TableCell>;
};

export default Default;
