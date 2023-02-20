import React, { useMemo } from 'react';
import { SxProps, TableCell } from '@mui/material';

import { flexContainerStyles } from 'Component/Table/VirtualizedTable';

export type TableCellRootProps = {
  children: React.ReactNode,
  isNumeric?: boolean;
  height?: number | string;
  sx?: SxProps;
};

const TableCellRoot: React.FC<TableCellRootProps> = ({ children, isNumeric = false, height = '100px', sx = {}, ...rest }) => {
  const preparedStyles = useMemo<SxProps>(
    () => (
      {
        ...flexContainerStyles,
        height: height,
        flex: 1,
        maxWidth: '100%',
        ...sx,
      }
    ),
    [height, sx]
  )

  return (
    <TableCell
      sx={preparedStyles}
      variant='body'
      align={isNumeric ? 'right' : 'left'}
      {...rest}>
      {children}
    </TableCell>
  );
};
export default TableCellRoot
