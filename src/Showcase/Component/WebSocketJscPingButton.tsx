import * as React from 'react';
import * as Selector from '../../Store/Selector';
import JSCApi from '../../API/JSC';
import useSelector from '../../Store/useSelector';
import {useDispatch} from 'react-redux';
import {webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction} from '../../Store/Action';
import {Button} from '@mui/material';

const ROOM_PING = JSCApi.WebSocketClient.ROOM_PING;

const JscPingButton: React.FC = () => {
  const dispatch = useDispatch()
  const config = useSelector(Selector.Configuration.Configuration);
  const jsc2jfsConnected = useSelector(Selector.WebSocket.isJsc2JfsWebSocketConnected);
  const jsc2jfsNamespace = useSelector(Selector.WebSocket.pickJsc2Jfs);
  if (!config) {
    return null;
  }

  let button = null;
  if (jsc2jfsConnected) {
    const room = jsc2jfsNamespace.rooms.find(({name}) => name === ROOM_PING.room);
    if (!room || room.hasJoined === false) {
      button = <Button variant={'contained'} disabled={room && room.isJoining} onClick={() => dispatch(webSocketJoinRoomRequestAction(ROOM_PING))}>Join Jsc Ping Room</Button>;
    } else {
      button = <Button variant={'contained'} onClick={() => dispatch(webSocketLeaveRoomRequestAction(ROOM_PING))}>Leave Jsc Ping Room</Button>;
    }
  }
  return <>
    {button != null && button || <>JscWebSocket not connected!</>}
  </>;
}

export default JscPingButton;
