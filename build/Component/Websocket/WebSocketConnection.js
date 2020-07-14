import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { webSocketUpdateRoomAction } from '../../Store/Action/WebSocketAction';
import { WSClient } from '../../Base/WSClient';
const WebSocketConnection = ({ children, webSocketUpdateRoomAction }) => {
    useEffect(() => {
        WSClient.listenRoomsObservable$.subscribe((roomData) => webSocketUpdateRoomAction(roomData));
    }, []);
    return (React.createElement("div", null, children));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { config: state.Core.Configuration.config, webSocketConnectionReducer: state.Core.WebSocketConnection }));
export default connect(mapStateToProps, {
    webSocketUpdateRoomAction
})(WebSocketConnection);
//# sourceMappingURL=WebSocketConnection.js.map