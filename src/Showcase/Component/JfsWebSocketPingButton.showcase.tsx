import React from 'react';
import * as MUI from '@mui/material';
import { useIntl } from 'react-intl';
import { IWebSocketRoom } from '../../Types/WebSocket';
import * as Selector from '../../Store/Selector';
import useSelector from '../../Store/useSelector';
import { useDispatch } from 'react-redux';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '../../Store/Action';

const pingRoom: IWebSocketRoom = {
  room: 'ping',
  namespace: 'Jfs2Jfs'
};

const JfsPingButton: React.FC = () => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl();
  const config = useSelector(Selector.Configuration.Configuration);
  const jfs2jfsConnected = useSelector(Selector.WebSocket.isJfs2JfsWebSocketConnected);
  const jfs2jfsNamespace = useSelector(Selector.WebSocket.pickJfs2Jfs);

  if (!config) {
    return null;
  }


  if (jfs2jfsConnected) {
    const room = jfs2jfsNamespace.rooms.find(({ name }) => name === pingRoom.room);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => dispatch(webSocketJoinRoomRequestAction(pingRoom))}>
          {formatMessage({ id: 'jfsWebSocket.pingJoinRoom' })}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button onClick={() => dispatch(webSocketLeaveRoomRequestAction(pingRoom))}>
          {formatMessage({ id: 'jfsWebSocket.pingLeaveRoom' })}
        </MUI.Button>
      );
    }
  }
  return <MUI.Typography variant='button'>JfsWebSocket not connected!</MUI.Typography>;
};

export default JfsPingButton;
