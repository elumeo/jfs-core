import * as React from 'react';
import * as Selector from '../../Store/Selector';
import useSelector from '../../Store/useSelector';
import AppNavigation from './AppNavigation.showcase';
import Layout from '../../Component/App/Layout';
import JscPingButton from './WebSocketJscPingButton';
import JfsPingButton from './WebSocketJfsPingButton';
import {Stack, Typography} from '@mui/material';

const WebSocket: React.FC = () => {
  const config = useSelector(Selector.Configuration.Configuration);
  if (!config) {
    return null;
  }

  return <Layout navigation={<AppNavigation/>}>
    <Stack direction='row' spacing={2}>
      <JscPingButton/>
      <JfsPingButton/>
    </Stack>
    <Typography mt={1}>ToDo: Implement showcase logic to display WebSocket room updates here. Currently you have to add 'console.log' at 'src/Component/App/Stateful/WebSocket.tsx'</Typography>
  </Layout>;
}

export default WebSocket;
