import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
export const webSocketConnectionReducerInitialState = {
// It is not possible to set initial state values for any namespace here because namespaces will be created
// dynamically with the action: webSocketAddNamespaceAction
};
const WebSocketConnection = createReducer(webSocketConnectionReducerInitialState)
    .handleAction(Action.webSocketConnectRequestAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: Object.assign(Object.assign({}, state[action.payload]), { isConnecting: true, isConnected: false, connectionError: null }) });
})
    .handleAction(Action.webSocketConnectSuccessAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: Object.assign(Object.assign({}, state[action.payload]), { isConnecting: false, isConnected: true, connectionError: null }) });
})
    .handleAction(Action.webSocketConnectFailedAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload.namespace]: Object.assign(Object.assign({}, state[action.payload.namespace]), { isConnecting: false, isConnected: false, connectionError: action.payload.message }) });
})
    .handleAction(Action.webSocketDisconnectSuccessAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: Object.assign(Object.assign({}, state[action.payload]), { isConnecting: false, isConnected: false, connectionError: null, rooms: [] }) });
})
    .handleAction([
    Action.webSocketJoinRoomLoadingAction,
    Action.webSocketJoinRoomSuccessAction,
    Action.webSocketJoinRoomFailureAction
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
    .handleAction(Action.webSocketLeaveRoomSuccessAction, (state, action) => {
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
    .handleAction(Action.webSocketAddNamespaceAction, (state, action) => {
    return Object.assign(Object.assign({}, state), { [action.payload]: {
            isConnected: false,
            isConnecting: false,
            connectionError: null,
            rooms: []
        } });
});
export default WebSocketConnection;
//# sourceMappingURL=WebSocketConnectionReducer.js.map