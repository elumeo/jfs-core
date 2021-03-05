import React from 'react';
import { isWebSocketNamespaceConnectedState } from '../../Store/Selectors/WebSocketSelectors';
import { useSelector } from '../../Types/Redux';
import './WebSocketStatus.scss';
const WebSocketStatus = () => {
    const { JscWebSocketClient, JfsWebSocketClient } = useSelector(state => state.Core.Configuration.config);
    const webSocketConnectionReducer = useSelector(state => state.Core.WebSocketConnection);
    console.log({ JscWebSocketClient, test: 'ASd', cond: JscWebSocketClient !== undefined
            && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JscWebSocketClient.PrivateNamespace) });
    return (React.createElement("div", { className: 'webSocketStatuses' },
        React.createElement("div", { className: [
                `websocket-status`,
                JscWebSocketClient !== undefined
                    && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JscWebSocketClient.PrivateNamespace) ?
                    'is-connected' :
                    'is-not-connected'
            ].join(' ') },
            "WS ",
            JscWebSocketClient.PrivateNamespace,
            " Status: ",
            React.createElement("span", { className: "websocket-status-indicator" })),
        React.createElement("div", { className: [
                `websocket-status`,
                JfsWebSocketClient !== undefined
                    && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JfsWebSocketClient.PrivateNamespace)
                    ? 'is-connected' : 'is-not-connected'
            ].join(' ') },
            "WS ",
            JfsWebSocketClient.PrivateNamespace,
            " Status: ",
            React.createElement("span", { className: "websocket-status-indicator" }))));
};
export default WebSocketStatus;
//# sourceMappingURL=WebSocketStatus.js.map