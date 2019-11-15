import { createSelector } from 'reselect'
import { IWebSocketReducerState, IWebSocketRoom } from '../reducer/WebSocketReducer';

const getRoomByNameSelector = (state: IWebSocketReducerState, roomName: string) => {
  let foundRoom: IWebSocketRoom = null;
  for(const room of state.joinedRooms) {
    if(room.name === roomName) {
      foundRoom = room;
    }
  }
  return foundRoom;
};

export const getRoomState = createSelector(
  [getRoomByNameSelector],
  (room) => room
);
