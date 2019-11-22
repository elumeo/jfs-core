import { createSelector } from 'reselect'
import { IWebSocketConnectionReducerState, IWebSocketRoomConnection } from '../reducer/WebSocketConnectionReducer';

const getRoomByNameSelector = (state: IWebSocketConnectionReducerState, roomName: string) => {
  let foundRoom: IWebSocketRoomConnection = null;
  for(const room of state.rooms) {
    if(room.name === roomName) {
      foundRoom = room;
    }
  }
  return foundRoom;
};

export const getRoomConnectionState = createSelector(
  [getRoomByNameSelector],
  (room) => ({...room})
);
