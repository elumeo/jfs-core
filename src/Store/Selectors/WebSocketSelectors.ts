import { createSelector } from 'reselect'
import WebSocketConnection, {
  IWebSocketRoom,
  IWebSocketRoomConnection
} from '../Reducer/Core/WebSocketConnectionReducer';

const isWebSocketNamespaceConnectedSelector = (state: WebSocketConnection.State, namespace: string) => {
  return state[namespace] !== undefined && state[namespace].isConnected;
};

const getRoomByNameSelector = (state: WebSocketConnection.State, room: IWebSocketRoom) => {
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
