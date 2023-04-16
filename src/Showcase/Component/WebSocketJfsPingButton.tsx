import React from 'react';
import * as MUI from '@mui/material';
import { IWebSocketRoom } from '../../Types/WebSocket';
import * as Selector from '../../Store/Selector';
import useSelector from '../../Store/useSelector';
import { useDispatch } from 'react-redux';
import {webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction} from '../../Store/Action';

const pingRoom: IWebSocketRoom = {
  room: 'ping',
  namespace: 'Jfs2Jfs'
};

const JfsPingButton: React.FC = () => {
  const dispatch = useDispatch()
  const config = useSelector(Selector.Configuration.Configuration);
  const jfs2jfsConnected = useSelector(Selector.WebSocket.isJfs2JfsWebSocketConnected);
  const jfs2jfsNamespace = useSelector(Selector.WebSocket.pickJfs2Jfs);

  if (!config) {
    return null;
  }

  if (jfs2jfsConnected) {
    const room = jfs2jfsNamespace.rooms.find(({ name }) => name === pingRoom.room);
    if (!room || room.hasJoined === false) {
      return <MUI.Button variant={'contained'} disabled={room && room.isJoining} onClick={() => dispatch(webSocketJoinRoomRequestAction(pingRoom))}>Join JFS Ping Room</MUI.Button>;
    } else {
      return <MUI.Button variant={'contained'} onClick={() => dispatch(webSocketLeaveRoomRequestAction(pingRoom))}>Leave Jfs Ping Room</MUI.Button>;
    }
  }
  return <MUI.Typography variant='button'>JfsWebSocket not connected!</MUI.Typography>;
};

export default JfsPingButton;
