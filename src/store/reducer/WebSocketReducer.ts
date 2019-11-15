import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketConnectFailedAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomSuccessAction, webSocketJoinRoomRequestAction
} from '../action/WebSocketAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface IWebSocketReducerState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  joinedRooms: IWebSocketRoom[];
}

export interface IWebSocketRoom {
  isJoining: boolean;
  hasJoined: boolean;
  name: string;
}

const initialState: IWebSocketReducerState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null,
  joinedRooms: []
};

export const webSocketReducer = createReducer(initialState)
  .handleAction(webSocketConnectRequestAction, (state: IWebSocketReducerState): IWebSocketReducerState => ({
    ...state,
    isConnecting: true,
    isConnected: false,
    connectionError: null
  }))
  .handleAction(webSocketConnectSuccessAction, (state: IWebSocketReducerState): IWebSocketReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: true,
    connectionError: null
  }))
  .handleAction(webSocketConnectFailedAction, (state: IWebSocketReducerState): IWebSocketReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: false,
    joinedRooms: []
  }))

  .handleAction(webSocketJoinRoomRequestAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => {
    const rooms = state.joinedRooms;
    let foundRoom = false;
    let roomFound = {} as IWebSocketRoom;
    const newRooms: IWebSocketRoom[] = [];
    for(const room of state.joinedRooms) {
      if(room.name === action.payload) {
        foundRoom = true;
        roomFound = {
          ...room
        }
      } else {
        newRooms.push(room);
      }
    }
    if(foundRoom === false) {
      roomFound.isJoining = false;
      roomFound.hasJoined = false;
      roomFound.name = action.payload;
    }
    // const indexOfRoom = state.joinedRooms.indexOf(action.payload);
    // const joinedRooms = state.joinedRooms;
    // if (indexOfRoom === -1) {
    //   joinedRooms.push(action.payload);
    // }
    return {
      ...state,
      // joinedRooms
    }
  })

  .handleAction(webSocketJoinRoomSuccessAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => {
    let roomUpdate: IWebSocketRoom = {
      hasJoined: false,
      isJoining: false,
      name: action.payload
    } as IWebSocketRoom;
    for(const roomIndex in state.joinedRooms) {
      console.log(roomIndex);
      // if(room.name === action.payload) {
      //   roomUpdate = {
      //     ...room,
      //     ...roomUpdate
      //   }
      // }
    }
    // const indexOfRoom = state.joinedRooms.indexOf(action.payload);
    // const joinedRooms = state.joinedRooms;
    // if (indexOfRoom === -1) {
    //   joinedRooms.push(action.payload);
    // }
    return {
      ...state,
      // joinedRooms
    }
  })
  .handleAction(webSocketLeaveRoomSuccessAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => {
    // const indexOfRoom = state.joinedRooms.indexOf(action.payload);
    // const joinedRooms = state.joinedRooms;
    // if (indexOfRoom !== -1) {
    //   joinedRooms.splice(indexOfRoom, 1);
    // }
    return {
      ...state,
      // joinedRooms
    }
  })
;
