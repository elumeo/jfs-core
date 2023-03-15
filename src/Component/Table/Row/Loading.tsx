import React, {FC} from 'react';
import {CircularProgress, TableRow} from '@mui/material';
import {TableRowProps} from '@mui/material/TableRow';

const sx = {
  textAlign: 'center',
  mt: 2
}
const Loading: FC<TableRowProps> = ({...rest}) => <TableRow sx={sx} {...rest}><CircularProgress/></TableRow>;
export default Loading
