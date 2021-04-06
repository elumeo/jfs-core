import React from 'react';
import { initialState } from '../../Store/Reducer/Core/WebSocket';
import * as Type from '../../Types/Configuration';
import * as Action from '../../Store/Action';
export declare type Props = {
    config?: Type.Configuration;
    webSocketConnectionReducer?: typeof initialState;
    webSocketUpdateRoomAction?: typeof Action.webSocketUpdateRoomAction;
};
declare const WebSocketProvider: React.FC;
export default WebSocketProvider;
