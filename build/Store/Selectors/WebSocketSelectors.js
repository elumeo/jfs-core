import { createSelector } from 'reselect';
const isWebSocketNamespaceConnectedSelector = (state, namespace) => {
    return state[namespace] !== undefined && state[namespace].isConnected;
};
const getRoomByNameSelector = (state, room) => {
    let foundRoom = null;
    for (const stateRoom of state[room.namespace].rooms) {
        if (stateRoom.name === room.room) {
            foundRoom = stateRoom;
        }
    }
    return foundRoom;
};
export const getRoomConnectionState = createSelector([getRoomByNameSelector], (room) => (Object.assign({}, room)));
export const isWebSocketNamespaceConnectedState = createSelector([isWebSocketNamespaceConnectedSelector], (isConnected) => isConnected);
//# sourceMappingURL=WebSocketSelectors.js.map