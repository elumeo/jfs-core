import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import * as History from './History';

const Overlay: React.FC = () => (
  <Card style={{
    width: 400,
    height: 'calc(100vh - 100px)'
  }}>
    <CardHeader style={{ height: 70 }} action={<History.Toolbar/>}/>
    <CardContent style={{
      width: '100%',
      height: 'calc(100% - 70px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <History.All/>
    </CardContent>
  </Card>
);

export default Overlay;
