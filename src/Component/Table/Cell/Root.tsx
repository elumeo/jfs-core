import React from 'react';
import {TableCellProps, TableCell} from '@mui/material';


export type Props = TableCellProps & {
  isNumeric?: boolean;
};

const Root: React.FC<Props> = ({children, isNumeric = false, ...rest}) => <TableCell
  variant='body'
  align={isNumeric ? 'right' : 'left'}
  {...rest}>
  {children}
</TableCell>;
export default Root;
