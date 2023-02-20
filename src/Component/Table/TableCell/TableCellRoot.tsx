import React from 'react';
import { TableCellProps, TableCell } from '@mui/material';


export type TableCellRootProps = TableCellProps & {
  isNumeric?: boolean;
};

const TableCellRoot: React.FC<TableCellRootProps> = ({ children, isNumeric = false, ...rest }) => {

  return (
    <TableCell
      variant='body'
      align={isNumeric ? 'right' : 'left'}
      {...rest}>
      {children}
    </TableCell>
  );
};
export default TableCellRoot
