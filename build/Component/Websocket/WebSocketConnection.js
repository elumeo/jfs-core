import React, { useEffect } from 'react';
import { WSClient } from 'API/WS/WSClient';
import useActions from 'Store/useActions';
const WebSocketProvider = ({ children }) => {
    const { webSocketUpdateRoomAction } = useActions();
    useEffect(() => {
        WSClient.listenRoomsObservable$
            .subscribe((roomData) => webSocketUpdateRoomAction(roomData));
    }, []);
    return (React.createElement(React.Fragment, null, children));
};
export default WebSocketProvider;
