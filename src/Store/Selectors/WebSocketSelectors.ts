import { createSelector } from 'reselect'
import {
  State as WebSocketConnectionState,
  IWebSocketRoom,
  IWebSocketRoomConnection
} from 'Store/Reducer/Core/WebSocketConnectionReducer';

const isWebSocketNamespaceConnectedSelector = (
  state: WebSocketConnectionState,
  namespace: string
) => (
  state[namespace] !== undefined &&
  state[namespace].isConnected
);

const getRoomByNameSelector = (
  state: WebSocketConnectionState,
  room: IWebSocketRoom
) => {
  let foundRoom: IWebSocketRoomConnection = null;
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
