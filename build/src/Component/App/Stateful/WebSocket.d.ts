import React from 'react';
import { initialState } from 'Store/Reducer/Core/WebSocket';
import * as Type from 'Types/Configuration';
import * as Action from 'Store/Action';
export type Props = {
    children: React.ReactNode;
    config?: Type.Configuration;
    webSocketConnectionReducer?: typeof initialState;
    webSocketUpdateRoomAction?: typeof Action.webSocketUpdateRoomAction;
    webSocketConnectFailedAction?: typeof Action.webSocketConnectFailedAction;
};
declare const WebSocket: ({ children }: Props) => JSX.Element;
export default WebSocket;
