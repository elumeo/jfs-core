import { webSocketConnectionReducerInitialState } from '../../Store/Reducer/Core/WebSocketConnectionReducer';
import { webSocketUpdateRoomAction } from '../../Store/Action/WebSocketAction';
import IConfig from '../../Types/Configuration';
export interface IWebsocketConnectionProps {
    config?: IConfig;
    webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
    webSocketUpdateRoomAction?: typeof webSocketUpdateRoomAction;
}
export interface IWebsocketConnectionState {
    isConnecting: false;
    isConnected: false;
}
declare const _default: import("react-redux").ComponentClass<IWebsocketConnectionProps>;
export default _default;
