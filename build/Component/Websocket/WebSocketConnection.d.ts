import React from 'react';
import { webSocketConnectionReducerInitialState } from '../../Store/Reducer/Core/WebSocketConnectionReducer';
import IConfig from '../../Types/Configuration';
import { webSocketUpdateRoomAction } from '../../Store/Action/WebSocketAction';
export interface IWebsocketConnectionProps {
    config?: IConfig;
    webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
    webSocketUpdateRoomAction?: typeof webSocketUpdateRoomAction;
}
export interface IWebsocketConnectionState {
    isConnecting: false;
    isConnected: false;
}
declare const WebSocketConnection: React.FC;
export default WebSocketConnection;
