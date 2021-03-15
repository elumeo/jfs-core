import React from 'react';
import * as MUI from '@material-ui/core';
import * as History from './History';

const Overlay: React.FC = () => (
  <MUI.Card style={{
    width: 400,
    height: 'calc(100vh - 100px)'
  }}>
    <MUI.CardHeader style={{ height: 70 }} action={<History.Toolbar/>}/>
    <MUI.CardContent style={{
      width: '100%',
      height: 'calc(100% - 70px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <History.All/>
    </MUI.CardContent>
  </MUI.Card>
);

export default Overlay;
