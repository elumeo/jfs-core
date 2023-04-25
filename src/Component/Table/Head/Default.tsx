import React, {useMemo} from 'react';
import {TableCell, TableSortLabel, SortDirection, SxProps, TableCellProps, Typography, TableSortLabelProps} from '@mui/material';
import {visuallyHiddenStyle} from 'Component/Table/VirtualizedTable';
import {grey} from '@mui/material/colors';
import {apatith} from 'Constant/Color';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

export const sortingStyles: SxProps = {
  backgroundColor: grey[200],
  borderRadius: `${definition.spacing(.5)} ${definition.spacing(.5)} 0 0`
}

export type Props = TableCellProps & {
  height?: number;
  isNumeric?: boolean;
  disableSort?: boolean;

  sortBy?: string;
  sortDirection?: SortDirection;
  label?: React.ReactNode;
  dataKey: string;
};

const Default: React.FC<Props> = ({height = 48, isNumeric = false, disableSort = false, sortBy, sortDirection, onClick, label, dataKey, width, ...rest}) => {
  const isActiveSort = sortBy === dataKey
  const color = isActiveSort || !disableSort
    ? apatith.main
    : 'inherit'
  const styles = useMemo<SxProps>(() => (
      {
        ...(isActiveSort ? sortingStyles : {}),
        height: height,
        maxWidth: '100%',
        width: width
      }
    ), [sortBy, isActiveSort, height, width]);

  const sort: TableCellProps['onClick'] = event => disableSort || onClick(event)
  return <TableCell
    variant='head'
    sx={styles}
    align={rest.align ? rest.align : isNumeric ? 'right' : 'left'}
    onClick={sort}
    {...rest}
  >
    {disableSort && <Typography fontWeight={600} variant='subtitle1'>{label}</Typography>}
    {!disableSort &&
      <TableSortLabel active={isActiveSort} direction={sortDirection as TableSortLabelProps['direction']} sx={{color}}>
        <Typography fontWeight={600} lineHeight={1} variant='subtitle1' color={color}>{label}</Typography>
        {isActiveSort
          ? <Typography component='span' sx={visuallyHiddenStyle}>
            {
              `${sortDirection}`.toLowerCase() === 'desc'
                ? 'sorted descending'
                : 'sorted ascending'
            }
          </Typography>
          : null
        }
      </TableSortLabel>
    }
  </TableCell>;
};

export default Default;
