import { createSelector } from 'reselect'
import * as Type from 'Types/WebSocket';
import { State as WebSocketConnectionState } from 'Store/Reducer/Core/WebSocket';

const isWebSocketNamespaceConnectedSelector = (
  state: WebSocketConnectionState,
  namespace: string
) => (
  state[namespace] !== undefined &&
  state[namespace].isConnected
);

const getRoomByNameSelector = (
  state: WebSocketConnectionState,
  room: Type.IWebSocketRoom
) => {
  let foundRoom: Type.IWebSocketRoomConnection = null;
  for(const stateRoom of state[room.namespace].rooms) {
    if(stateRoom.name === room.room) {
      foundRoom = stateRoom;
    }
  }
  return foundRoom;
};

export const getRoomConnectionState = createSelector(
  [getRoomByNameSelector],
  (room) => ({...room})
);

export const isWebSocketNamespaceConnectedState = createSelector(
  [isWebSocketNamespaceConnectedSelector],
  (isConnected) => isConnected
);
