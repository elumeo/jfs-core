import * as React from 'react';
import { connect } from 'react-redux';

import IRootReducer from '../../store/reducer/RootReducer';
import { IConfigReducerState } from '../../store/reducer/ConfigReducer';
import { IWebSocketReducerState } from '../../store/reducer/WebSocketReducer';
import { webSocketConnectRequestAction } from '../../store/action/WebSocketAction';

export interface IWebsocketConnectionProps {
  config?: IConfigReducerState;
  webSocket?: IWebSocketReducerState;
  webSocketConnectRequestAction?: () => void;
}

export interface IWebsocketConnectionState {
  isConnecting: false,
  isConnected: false
}

class WebSocketConnection extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  componentDidUpdate(prevProps: IWebsocketConnectionProps, prevState: IWebsocketConnectionState) {
    if(prevProps.webSocket.isConnected === false && this.props.webSocket.isConnected && this.props.config.WebSocketClient.AutoJoinRooms) {
      for(let i = 0; i < this.props.config.WebSocketClient.AutoJoinRooms.length; i++) {
        console.log('WANT TO AUTO JOIN ROOM:', this.props.config.WebSocketClient.AutoJoinRooms[i]);
        // this.props.webSocketJoinRoomRequestAction(this.props.config.WebSocketClient.AutoJoinRooms[i]);
      }
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

const mapStateToProps = (state: IRootReducer, ownProps: IWebsocketConnectionProps): IWebsocketConnectionProps => ({
  ...ownProps,
  config: state.configReducer,
  webSocket: state.webSocketReducer
});

export default connect(
  mapStateToProps,
  { webSocketConnectRequestAction }
)(WebSocketConnection);
