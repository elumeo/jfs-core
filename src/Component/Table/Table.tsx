import {Table as MuiTable, TableProps} from '@mui/material';
import React from 'react';

const Table = (props: TableProps) => <MuiTable sx={{ borderCollapse: 'separate', width: '100%' }} {...props} />;

export default Table;
