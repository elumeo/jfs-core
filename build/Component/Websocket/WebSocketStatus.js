import React from 'react';
import { connect } from 'react-redux';
import './WebSocketStatus.scss';
import { isWebSocketNamespaceConnectedState } from '../../Store/Selectors/WebSocketSelectors';
class WebSocketStatus extends React.Component {
    render() {
        const { webSocketConnectionReducer, config: { JscWebSocketClient, JfsWebSocketClient } } = this.props;
        return (React.createElement("div", { className: 'webSocketStatuses' },
            React.createElement("div", { className: [
                    `websocket-status`,
                    JscWebSocketClient !== undefined && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JscWebSocketClient.PrivateNamespace) ? '-is-connected' : '-is-not-connected'
                ].join(' ') },
                "WS ",
                JscWebSocketClient.PrivateNamespace,
                " Status: ",
                React.createElement("span", { className: "websocket-status-indicator" })),
            React.createElement("div", { className: [
                    `websocket-status`,
                    JfsWebSocketClient !== undefined && isWebSocketNamespaceConnectedState(webSocketConnectionReducer, JfsWebSocketClient.PrivateNamespace) ? '-is-connected' : '-is-not-connected'
                ].join(' ') },
                "WS ",
                JfsWebSocketClient.PrivateNamespace,
                " Status: ",
                React.createElement("span", { className: "websocket-status-indicator" }))));
    }
}
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { webSocketConnectionReducer: state.Core.WebSocketConnection, config: state.Core.Configuration.config }));
const enhance = connect(mapStateToProps, {});
export default enhance(WebSocketStatus);
//# sourceMappingURL=WebSocketStatus.js.map