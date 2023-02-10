import React from 'react';
import { CircularProgress, TableRow } from '@mui/material';

const sx = {
  textAlign: 'center',
  mt: 2
}
const TableRowLoading = () => {
  return <TableRow sx={sx}><CircularProgress /></TableRow>;
};
export default TableRowLoading
