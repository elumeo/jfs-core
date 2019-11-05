import * as React from 'react';
import IRootReducer from '../../store/reducer/RootReducer';
import { connect } from 'react-redux';
import { webSocketConnectRequestAction } from '../../store/action/WebSocketAction';
import { IWebsocketConnectionProps, IWebsocketConnectionState } from './WebSocketConnection';

import './WebSocketStatus.scss';

class WebSocketStatus extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  render() {
    const { webSocket } = this.props;

    return (
      <div
        id="webSocketStatus"
        className={`websocket-status ${webSocket.isConnected ? '-is-connected' : '-is-not-connected'}`}
      >
        WebSocket Status: <span className="websocket-status-indicator" />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IWebsocketConnectionProps): IWebsocketConnectionProps => ({
  ...ownProps,
  webSocket: state.webSocketReducer
});

export default connect(
  mapStateToProps,
  { webSocketConnectRequestAction }
)(WebSocketStatus);
