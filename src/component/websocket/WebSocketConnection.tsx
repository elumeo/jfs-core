import * as React from 'react';
import { connect } from 'react-redux';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { IWebSocketConnectionReducerState } from '../../store/reducer/WebSocketConnectionReducer';
import { webSocketConnectRequestAction, webSocketJoinRoomRequestAction } from '../../store/action/WebSocketAction';
import IConfig from '../../base/IConfig';

export interface IWebsocketConnectionProps {
  config?: IConfig;
  webSocket?: IWebSocketConnectionReducerState;
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
        return this.props.webSocketJoinRoomRequestAction(room)
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
  {webSocketConnectRequestAction: webSocketConnectRequestAction, webSocketJoinRoomRequestAction}
)(WebSocketConnection);
