import * as React from 'react';
import { connect } from 'react-redux';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { IWebSocketJoinRoom, IWebSocketReducerState } from '../../store/reducer/WebSocketReducer';
import {
  webSocketConnectRequestAction,
  webSocketJoinRoomRequestAction, webSocketUpdateRoomAction
} from '../../store/action/WebSocketAction';
import IConfig from '../../base/IConfig';

export interface IWebsocketConnectionProps {
  config?: IConfig;
  webSocket?: IWebSocketReducerState;
  webSocketConnectRequestAction?: typeof webSocketConnectRequestAction;
  webSocketJoinRoomRequestAction?: typeof webSocketJoinRoomRequestAction;
}

export interface IWebsocketConnectionState {
  isConnecting: false,
  isConnected: false
}

class WebSocketConnection extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  componentDidUpdate(
    prevProps: IWebsocketConnectionProps,
    _prevState: IWebsocketConnectionState
  ): void {
    const joinRooms = (
      prevProps.webSocket.isConnected === false &&
      this.props.webSocket.isConnected &&
      this.props.config.WebSocketClient.AutoJoinRooms
    );
    if (joinRooms) {
      this.props.config.WebSocketClient.AutoJoinRooms.map(room => {
        const joinRoom = {
          room,
          action: webSocketUpdateRoomAction
        } as IWebSocketJoinRoom;
        return this.props.webSocketJoinRoomRequestAction(joinRoom)
      });
    }
  }

  public render() {
    const {props: {children}} = this;
    return (
      <div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IWebsocketConnectionProps
): IWebsocketConnectionProps => ({
  ...ownProps,
  config: state.configReducer.config,
  webSocket: state.webSocketReducer
});

export default connect(
  mapStateToProps,
  {webSocketConnectRequestAction, webSocketJoinRoomRequestAction}
)(WebSocketConnection);
