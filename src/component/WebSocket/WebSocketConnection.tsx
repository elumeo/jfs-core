import * as React from 'react';
import { connect } from 'react-redux';

// import { wsConnect } from '../modules/websocket';
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
  public componentDidMount() {
    const { props: { webSocketConnectRequestAction } } = this;
    webSocketConnectRequestAction();
  }

  // public componentDidUpdate(prevProps: Readonly<IWebsocketConnectionProps>): void {
  //   const {props: {config, webSocket, webSocketConnectRequestAction}} = this;
  //   if (config.loaded && webSocket.isConnected === false && webSocket.isConnecting === false) {
  //     console.log('componentDidUpdate', config, webSocket);
  //     webSocketConnectRequestAction();
  //   }
  // }

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
