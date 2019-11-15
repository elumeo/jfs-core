import * as React from 'react';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { connect } from 'react-redux';
import { webSocketConnectRequestAction } from '../../store/action/WebSocketAction';
import { IWebsocketConnectionProps, IWebsocketConnectionState } from './WebSocketConnection';

import './WebSocketStatus.scss';

class WebSocketStatus extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  render() {
    const {webSocket} = this.props;

    return (
      <div
        id="webSocketStatus"
        className={[
          `websocket-status`,
          webSocket.isConnected ? '-is-connected' : '-is-not-connected'
        ].join(' ')}
      >
        WebSocket Status: <span className="websocket-status-indicator"/>
      </div>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IWebsocketConnectionProps
): IWebsocketConnectionProps => ({
  ...ownProps,
  webSocket: state.webSocketReducer
});
const enhance = connect(mapStateToProps, {webSocketConnectRequestAction});

export default enhance(WebSocketStatus);
