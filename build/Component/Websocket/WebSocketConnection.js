import React, { useEffect } from 'react';
import { WSClient } from '../../Base/WSClient';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
const WebSocketConnection = ({ children }) => {
    const { webSocketConnectionReducer, config } = useSelector(state => ({
        config: state.Core.Configuration.config,
        webSocketConnectionReducer: state.Core.WebSocketConnection
    }));
    const { webSocketUpdateRoomAction } = useActions();
    useEffect(() => {
        WSClient.listenRoomsObservable$
            .subscribe((roomData) => webSocketUpdateRoomAction(roomData));
    }, []);
    return (React.createElement(React.Fragment, null, children));
};
export default WebSocketConnection;
//# sourceMappingURL=WebSocketConnection.js.map