import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Progress: React.FC = () => (
  <div style={style}>
    <CircularProgress/>
  </div>
);

export default Progress;
