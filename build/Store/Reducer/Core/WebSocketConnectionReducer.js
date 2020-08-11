import { createReducer } from 'typesafe-actions';
import { webSocketAddNamespaceAction, webSocketConnectFailedAction, webSocketConnectRequestAction, webSocketConnectSuccessAction, webSocketDisconnectSuccessAction, webSocketJoinRoomFailureAction, webSocketJoinRoomLoadingAction, webSocketJoinRoomSuccessAction, webSocketLeaveRoomSuccessAction } from '../../Action/WebSocketAction';
export const webSocketConnectionReducerInitialState = {};
const WebSocketConnection = createReducer(webSocketConnectionReducerInitialState)
    .handleAction(webSocketConnectRequestAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: Object.assign(Object.assign({}, state[action.payload]), { isConnecting: true, isConnected: false, connectionError: null }) });
})
    .handleAction(webSocketConnectSuccessAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: Object.assign(Object.assign({}, state[action.payload]), { isConnecting: false, isConnected: true, connectionError: null }) });
})
    .handleAction(webSocketConnectFailedAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload.namespace]: Object.assign(Object.assign({}, state[action.payload.namespace]), { isConnecting: false, isConnected: false, connectionError: action.payload.message }) });
})
    .handleAction(webSocketDisconnectSuccessAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: Object.assign(Object.assign({}, state[action.payload]), { isConnecting: false, isConnected: false, connectionError: null, rooms: [] }) });
})
    .handleAction([
    webSocketJoinRoomLoadingAction,
    webSocketJoinRoomSuccessAction,
    webSocketJoinRoomFailureAction
], (state, action) => {
    const newRooms = [];
    if (state[action.payload.namespace] !== undefined) {
        for (const room of state[action.payload.namespace].rooms) {
            if (room.name !== action.payload.name) {
                newRooms.push(room);
            }
        }
    }
    newRooms.push(action.payload);
    return Object.assign(Object.assign({}, state), { [action.payload.namespace]: Object.assign(Object.assign({}, state[action.payload.namespace]), { rooms: newRooms }) });
})
    .handleAction(webSocketLeaveRoomSuccessAction, (state, action) => {
    const newRooms = [];
    for (const room of state[action.payload.namespace].rooms) {
        if (room.name !== action.payload.room) {
            newRooms.push(room);
        }
        else {
            const newRoom = Object.assign({}, room);
            newRoom.hasJoined = false;
            newRoom.isJoining = false;
            newRooms.push(newRoom);
        }
    }
    return Object.assign(Object.assign({}, state), { [action.payload.namespace]: Object.assign(Object.assign({}, state[action.payload.namespace]), { rooms: newRooms }) });
})
    .handleAction(webSocketAddNamespaceAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: {
            isConnected: false,
            isConnecting: false,
            connectionError: null,
            rooms: []
        } });
});
export default WebSocketConnection;
//# sourceMappingURL=WebSocketConnectionReducer.js.map