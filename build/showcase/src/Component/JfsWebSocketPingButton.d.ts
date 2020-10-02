import { InjectedIntlProps } from 'react-intl';
import { webSocketConnectionReducerInitialState } from '@elumeo/jfs-core/build/Store/Reducer/Core/WebSocketConnectionReducer';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
import { IJsc2JfsPingExampleState } from '../../../Store/Reducer/App/Jsc2JfsPingExampleReducer';
import IAppConfig from '../../../Setup/IAppConfig';
export interface IJfsWebSocketExampleButtonProps extends InjectedIntlProps {
    config?: IAppConfig;
    webSocketJoinRoomRequestAction?: typeof webSocketJoinRoomRequestAction;
    webSocketLeaveRoomRequestAction?: typeof webSocketLeaveRoomRequestAction;
    webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
    exampleWebSocket?: IJsc2JfsPingExampleState;
}
declare const _default: import("react-redux").ConnectedComponent<any, any>;
export default _default;
