import React from 'react';

import { isWebSocketNamespaceConnectedState } from 'Store/Selectors/WebSocketSelectors';
import { useSelector } from 'Types/Redux';
import './WebSocketStatus.scss';

const WebSocketStatus: React.FC = () => {

  const { JscWebSocketClient, JfsWebSocketClient } = useSelector(state => state.Core.Configuration.config);
  const webSocketConnectionReducer = useSelector(state => state.Core.WebSocketConnection)
  console.log({JscWebSocketClient,test:'ASd', cond:JscWebSocketClient !== undefined 
    && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JscWebSocketClient.PrivateNamespace)})
  return (
    <div className={'webSocketStatuses'}> 
      <div
        className={[
          `websocket-status`,
          JscWebSocketClient !== undefined 
          && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JscWebSocketClient.PrivateNamespace) ? 
          'is-connected' : 
          'is-not-connected'
        ].join(' ')}
      >
        WS {JscWebSocketClient.PrivateNamespace} Status: <span className="websocket-status-indicator" />
      </div>
      <div
        className={[
          `websocket-status`,
          JfsWebSocketClient !== undefined 
          && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JfsWebSocketClient.PrivateNamespace) 
          ? 'is-connected' : 'is-not-connected'
        ].join(' ')}
      >
        WS {JfsWebSocketClient.PrivateNamespace} Status: <span className="websocket-status-indicator" />
      </div>
    </div>
  );
}


export default WebSocketStatus;
