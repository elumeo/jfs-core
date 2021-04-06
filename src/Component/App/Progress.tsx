import React from 'react';
import * as MUI from '@material-ui/core';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Progress: React.FC = () => (
  <div style={style}>
    <MUI.CircularProgress
      id='app-initialize-progress'/>
  </div>
);

export default Progress;
