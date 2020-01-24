import * as React from 'react';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { connect } from 'react-redux';
import { webSocketConnectRequestAction } from '../../store/action/WebSocketAction';
import { IWebsocketConnectionProps, IWebsocketConnectionState } from './WebSocketConnection';

import './WebSocketStatus.scss';
import { isWebSocketNamespaceConnectedState } from '../../store/selectors/WebSocketSelectors';

class WebSocketStatus extends React.Component<IWebsocketConnectionProps, IWebsocketConnectionState> {
  render() {
    const {webSocketConnectionReducer, config: {JscWebSocketClient, JfsWebSocketClient}} = this.props;

    return (
      <div className={'webSocketStatuses'}>
        <div
          className={[
            `websocket-status`,
            JscWebSocketClient !== undefined && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JscWebSocketClient.PrivateNamespace) ? '-is-connected' : '-is-not-connected'
          ].join(' ')}
        >
          WS {JscWebSocketClient.PrivateNamespace} Status: <span className="websocket-status-indicator"/>
        </div>
        <div
          className={[
            `websocket-status`,
            JfsWebSocketClient !== undefined && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JfsWebSocketClient.PrivateNamespace) ? '-is-connected' : '-is-not-connected'
          ].join(' ')}
        >
          WS {JfsWebSocketClient.PrivateNamespace} Status: <span className="websocket-status-indicator"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IWebsocketConnectionProps
): IWebsocketConnectionProps => ({
  ...ownProps,
  webSocketConnectionReducer: state.webSocketConnectionReducer,
  config: state.configReducer.config
});
const enhance = connect(mapStateToProps, {webSocketConnectRequestAction: webSocketConnectRequestAction});

export default enhance(WebSocketStatus);
