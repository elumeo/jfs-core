import React, { useMemo } from 'react';
import * as Type from 'Types/Configuration';
import { useSelector } from 'Types/Redux';
import { Box, Tooltip } from '@mui/material';
// import { useTheme } from '@material-ui/styles';
// import { Theme } from '@mui/styles';
import { green, red, yellow } from '@mui/material/colors';
import { useIntl } from 'react-intl';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

export type Props = {
  client: Type.WebSocketClient;
  roomName: string;
};

const Indicator: React.FC<Props> = ({ client, roomName }) => {
  // const theme = useTheme<Theme>();
  const {formatMessage} = useIntl();
  const isRoomJoined = useSelector(state =>
    Boolean(
      client?.PrivateNamespace
      && state.Core.WebSocket[client?.PrivateNamespace]?.isConnected
      && state.Core.WebSocket[client?.PrivateNamespace]?.rooms.find(room => room.name === roomName)?.hasJoined
    )
  );
  const isRoomJoining = useSelector(state =>
    Boolean(
      client?.PrivateNamespace
      && state.Core.WebSocket[client?.PrivateNamespace]?.isConnected
      && state.Core.WebSocket[client?.PrivateNamespace]?.rooms.find(room => room.name === roomName)?.isJoining
    )
  );
  const color = useMemo(() => isRoomJoined ? green[500] : isRoomJoining ? yellow[500] : red[500], [isRoomJoined]);
  return <Tooltip title={formatMessage({id: 'webSocket.room'}) + ': ' + roomName}>
    <Box width={definition.spacing(2)} height={definition.spacing(2)} borderRadius={'50%'} borderColor={color} bgcolor={color} />
  </Tooltip>;
};

export default Indicator;
