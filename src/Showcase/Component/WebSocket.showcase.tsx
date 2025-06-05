import * as React from 'react';
import * as Selector from '../../Store/Selector';
import useSelector from '../../Store/useSelector';
import { useSelector as useReduxSelector } from 'react-redux';
import AppNavigation from './AppNavigation.showcase';
import Layout from '../../Component/App/Layout';
import JscPingButton from './WebSocketJscPingButton';
import JfsPingButton from './WebSocketJfsPingButton';
import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { ActionType, createReducer } from "typesafe-actions";
import * as Action from "../../Store/Action";
import WebSocketCurrentGameButton from "./WebSocketCurrentGameButton";
import { State } from "../index";
import JSCApi from "../../API/JSC";

export type WebSocketState = JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<unknown>
export const WebSocketReducer = createReducer<WebSocketState, ActionType<typeof Action>>({})
  .handleAction(Action.webSocketJoinRoomSuccessAction, (): WebSocketState => ({}))
  .handleAction(Action.webSocketLeaveRoomSuccessAction, (): WebSocketState => ({}))
  .handleAction(Action.webSocketUpdateRoomAction, (_, action): WebSocketState => action.payload)

const WebSocket: React.FC = () => {
  const config = useSelector(Selector.Configuration.Configuration);
  const roomData = useReduxSelector<State>(state => state.Showcase.WebSocket);
  if (!config) {
    return null;
  }

  return <Layout navigation={<AppNavigation/>}>
    <Stack direction='row' spacing={2}>
      <JscPingButton/>
      <JfsPingButton/>
      <WebSocketCurrentGameButton/>
    </Stack>
    <br/>
    <Card>
      <CardHeader title='WebSocket Room Data'/>
      <CardContent>
        <Typography component='pre' mt={1}>{JSON.stringify(roomData, null, 4)}</Typography>
      </CardContent>
    </Card>
  </Layout>;
}

export default WebSocket;
