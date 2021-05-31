import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import { IWebSocketRoom }from '@elumeo/jfs-core/build/Types/WebSocket';
import * as Selector from 'Store/Selector';
import useSelector from 'Store/useSelector';
import useActions from  'Store/useActions';

const pingRoom: IWebSocketRoom = {
  room: 'ping',
  namespace: 'Jfs2Jfs'
};

const JfsPingButton: React.FC = () => {
  const { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } = useActions();
  const { formatMessage } = useIntl();
  const config = useSelector(state => state.Core.Configuration.config);

  if (!config) {
    return null;
  }

  const jfs2jfsConnected = useSelector(Selector.isJfs2JfsWebSocketConnected);
  const jfs2jfsNamespace = useSelector(state => state.Core.WebSocket['Jfs2Jfs']);

  if (jfs2jfsConnected) {
    const room = jfs2jfsNamespace.rooms.find(({ name }) => name === pingRoom.room);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => webSocketJoinRoomRequestAction(pingRoom)}>
          {formatMessage({id: 'jfsWebSocket.pingJoinRoom'})}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button onClick={() => webSocketLeaveRoomRequestAction(pingRoom)}>
          {formatMessage({id: 'jfsWebSocket.pingLeaveRoom'})}
        </MUI.Button>
      );
    }
  }
  return <MUI.Typography variant='button'>JfsWebSocket not connected!</MUI.Typography>;
};

export default JfsPingButton;
