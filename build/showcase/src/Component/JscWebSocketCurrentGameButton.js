import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getRoomConnectionState } from '@elumeo/jfs-core/build/Store/Selectors/WebSocketSelectors';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
import { isWebSocketNamespaceConnectedState } from '@elumeo/jfs-core/build/Store/Selectors/WebSocketSelectors';
import JSCApi from '../../../Jsc/Api';
var ROOM_CURRENT_GAME = JSCApi.WebSocketClient.ROOM_CURRENT_GAME;
class JscWebSocketCurrentGameButton extends React.Component {
    constructor() {
        super(...arguments);
        this.joinWebSocketRoom = () => this.props.webSocketJoinRoomRequestAction(ROOM_CURRENT_GAME);
        this.leaveWebSocketRoom = () => this.props.webSocketLeaveRoomRequestAction(ROOM_CURRENT_GAME);
    }
    render() {
        const { intl: { formatMessage }, config, webSocketConnectionReducer } = this.props;
        if (isWebSocketNamespaceConnectedState(webSocketConnectionReducer, config.JscWebSocketClient.PrivateNamespace)) {
            const room = getRoomConnectionState(webSocketConnectionReducer, ROOM_CURRENT_GAME);
            if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
                return (React.createElement(Button, { disabled: room !== null && room.isJoining, flat: true, onClick: this.joinWebSocketRoom }, formatMessage({ id: 'jscWebSocket.currentGameJoinRoom' })));
            }
            else {
                return (React.createElement(Button, { flat: true, onClick: this.leaveWebSocketRoom }, formatMessage({ id: 'jscWebSocket.currentGameLeaveRoom' })));
            }
        }
        return 'WebSocket not connected!';
    }
}
const mapStateToProps = (state, props) => (Object.assign(Object.assign(Object.assign({}, props), { webSocketConnectionReducer: state.Core.WebSocketConnection, jsc2JfsPingExampleReducer: state.App.jsc2JfsPingExampleReducer, config: state.App.configurationReducer.config }), state.Core.Language));
const enhance = compose(connect(mapStateToProps, { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction }), injectIntl);
export default enhance(JscWebSocketCurrentGameButton);
//# sourceMappingURL=JscWebSocketCurrentGameButton.js.map