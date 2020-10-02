import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getRoomConnectionState, isWebSocketNamespaceConnectedState } from '@elumeo/jfs-core/build/Store/Selectors/WebSocketSelectors';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
import JSCApi from '../../../Jsc/Api';
var ROOM_PING = JSCApi.WebSocketClient.ROOM_PING;
class JscWebSocketPingButton extends React.Component {
    constructor(props) {
        super(props);
        this.joinWebSocketRoomPing = () => this.props.webSocketJoinRoomRequestAction(ROOM_PING);
        this.leaveWebSocketRoomPing = () => this.props.webSocketLeaveRoomRequestAction(ROOM_PING);
    }
    render() {
        const { intl: { formatMessage }, config, webSocketConnectionReducer } = this.props;
        if (!config) {
            return null;
        }
        if (isWebSocketNamespaceConnectedState(webSocketConnectionReducer, config.JscWebSocketClient.PrivateNamespace)) {
            const room = getRoomConnectionState(webSocketConnectionReducer, ROOM_PING);
            if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
                return (React.createElement(Button, { disabled: room !== null && room.isJoining, flat: true, onClick: this.joinWebSocketRoomPing }, formatMessage({ id: 'jscWebSocket.pingJoinRoom' })));
            }
            else {
                return (React.createElement(Button, { flat: true, onClick: this.leaveWebSocketRoomPing }, formatMessage({ id: 'jscWebSocket.pingLeaveRoom' })));
            }
        }
        return 'JscWebSocket not connected!';
    }
}
const mapStateToProps = (state, props) => (Object.assign(Object.assign(Object.assign({}, props), { webSocketConnectionReducer: state.Core.WebSocketConnection, jsc2JfsPingExampleReducer: state.App.jsc2JfsPingExampleReducer, config: state.App.configurationReducer.config }), state.Core.Language));
const enhance = compose(connect(mapStateToProps, { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction }), injectIntl);
export default enhance(JscWebSocketPingButton);
//# sourceMappingURL=JscWebSocketPingButton.js.map