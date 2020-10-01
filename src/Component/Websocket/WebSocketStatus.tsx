import React from 'react';
import Global from 'Store/Reducer/Global';
import { connect } from 'react-redux';
import { IWebsocketConnectionProps, IWebsocketConnectionState } from './WebSocketConnection';

import './WebSocketStatus.scss';
import { isWebSocketNamespaceConnectedState } from 'Store/Selectors/WebSocketSelectors';

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
  state: Global.State,
  ownProps: IWebsocketConnectionProps
): IWebsocketConnectionProps => ({
  ...ownProps,
  webSocketConnectionReducer: state.Core.WebSocketConnection,
  config: state.Core.Configuration.config
});
const enhance = connect(mapStateToProps, {});

export default enhance(WebSocketStatus);
