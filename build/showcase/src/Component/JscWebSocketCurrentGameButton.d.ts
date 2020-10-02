import { InjectedIntlProps } from 'react-intl';
import { webSocketConnectionReducerInitialState } from '@elumeo/jfs-core/build/Store/Reducer/Core/WebSocketConnectionReducer';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
import { ICurrentGameState } from '../../../Store/Reducer/App/currentGameReducer';
import IAppConfig from '../../../Setup/IAppConfig';
export interface IJscWebSocketCurrentGameButtonProps extends InjectedIntlProps {
    config?: IAppConfig;
    webSocketJoinRoomRequestAction?: typeof webSocketJoinRoomRequestAction;
    webSocketLeaveRoomRequestAction?: typeof webSocketLeaveRoomRequestAction;
    webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
    currentGame?: ICurrentGameState;
}
declare const _default: import("react-redux").ConnectedComponent<any, any>;
export default _default;
