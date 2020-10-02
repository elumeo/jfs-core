import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getRoomConnectionState, isWebSocketNamespaceConnectedState } from '@elumeo/jfs-core/build/Store/Selectors/WebSocketSelectors';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
class JfsWebSocketPingButton extends React.Component {
    constructor(props) {
        super(props);
        this.pingRoom = { room: 'ping', namespace: 'Jfs2Jfs' };
        this.joinWebSocketRoomPing = () => this.props.webSocketJoinRoomRequestAction(this.pingRoom);
        this.leaveWebSocketRoomPing = () => this.props.webSocketLeaveRoomRequestAction(this.pingRoom);
    }
    render() {
        const { intl: { formatMessage }, config, webSocketConnectionReducer } = this.props;
        if (isWebSocketNamespaceConnectedState(webSocketConnectionReducer, config.JfsWebSocketClient.PrivateNamespace)) {
            const room = getRoomConnectionState(webSocketConnectionReducer, this.pingRoom);
            if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
                return (React.createElement(Button, { disabled: room !== null && room.isJoining, flat: true, onClick: this.joinWebSocketRoomPing }, formatMessage({ id: 'jfsWebSocket.pingJoinRoom' })));
            }
            else {
                return (React.createElement(Button, { flat: true, onClick: this.leaveWebSocketRoomPing }, formatMessage({ id: 'jfsWebSocket.pingLeaveRoom' })));
            }
        }
        return 'JfsWebSocket not connected!';
    }
}
const mapStateToProps = (state, props) => (Object.assign(Object.assign(Object.assign({}, props), { webSocketConnectionReducer: state.Core.WebSocketConnection, jfs2JfsPingExampleReducer: state.App.jfs2JfsPingExampleReducer, config: state.App.configurationReducer.config }), state.Core.Language));
const enhance = compose(connect(mapStateToProps, { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction }), injectIntl);
export default enhance(JfsWebSocketPingButton);
//# sourceMappingURL=JfsWebSocketPingButton.js.map