import React from 'react';
import {Box, TableContainer as MuiTableContainer} from '@mui/material';

const Container = React.forwardRef<HTMLDivElement>((props, ref) => <MuiTableContainer component={Box} {...props} ref={ref} />);

export default Container;
