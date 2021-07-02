import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const Progress = () => (React.createElement(Box, { style: style },
    React.createElement(CircularProgress, null)));
export default Progress;
