import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import * as History from './History';

const Overlay: React.FC = () => (
  <Card
    sx={{
      width: 400,
      height: 'calc(100vh - 100px)',
    }}>
    <CardHeader sx={{ height: 70 }} action={<History.Toolbar />} />
    <CardContent
      sx={{
        width: '100%',
        height: 'calc(100% - 70px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
      }}>
      <History.All />
    </CardContent>
  </Card>
);

export default Overlay;
