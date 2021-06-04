import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Progress: React.FC = () => (
  <Box style={style}>
    <CircularProgress/>
  </Box>
);

export default Progress;
