import { createReducer, PayloadAC, PayloadAction } from 'typesafe-actions';

import JSCApi from '../../JscApi';
import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketConnectFailedAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomSuccessAction,
  webSocketJoinRoomLoadingAction,
  webSocketJoinRoomFailureAction
} from '../action/WebSocketAction';

export interface IWebSocketJoinRoom {
  room: string;
  action: PayloadAC<string, any>
}

export interface IWebSocketJoiningRoom {
  roomState: IWebSocketRoomConnection;
  action: PayloadAC<string, any>
}

export interface IWebSocketUpdateRoom<T> {
  roomData: JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<T>;
  action: PayloadAC<string, any>
}

export interface IWebSocketConnectionReducerState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  rooms: IWebSocketRoomConnection[];
}

export interface IWebSocketRoomConnection {
  isJoining: boolean;
  hasJoined: boolean;
  name: string;
  error: string;
}

const initialState: IWebSocketConnectionReducerState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null,
  rooms: []
};

export const WebSocketConnectionReducer = createReducer(initialState)

  .handleAction(webSocketConnectRequestAction, (state: IWebSocketConnectionReducerState): IWebSocketConnectionReducerState => ({
    ...state,
    isConnecting: true,
    isConnected: false,
    connectionError: null
  }))
  .handleAction(webSocketConnectSuccessAction, (state: IWebSocketConnectionReducerState): IWebSocketConnectionReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: true,
    connectionError: null
  }))
  .handleAction(webSocketConnectFailedAction, (state: IWebSocketConnectionReducerState): IWebSocketConnectionReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: false,
    rooms: []
  }))

  .handleAction(webSocketJoinRoomLoadingAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, IWebSocketRoomConnection>): IWebSocketConnectionReducerState => {
    const newRooms: IWebSocketRoomConnection[] = [];
    for(const room of state.rooms) {
      if(room.name !== action.payload.name) {
        newRooms.push(room);
      }
    }
    newRooms.push(action.payload);
    return {
      ...state,
      rooms: newRooms
    }
  })
  .handleAction(webSocketJoinRoomSuccessAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, IWebSocketRoomConnection>): IWebSocketConnectionReducerState => {
    const newRooms: IWebSocketRoomConnection[] = [];
    for(const room of state.rooms) {
      if(room.name !== action.payload.name) {
        newRooms.push(room);
      }
    }
    newRooms.push(action.payload);
    return {
      ...state,
      rooms: newRooms
    }
  })
  .handleAction(webSocketJoinRoomFailureAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, IWebSocketRoomConnection>): IWebSocketConnectionReducerState => {
    const newRooms: IWebSocketRoomConnection[] = [];
    for(const room of state.rooms) {
      if(room.name !== action.payload.name) {
        newRooms.push(room);
      }
    }
    newRooms.push(action.payload);
    return {
      ...state,
      rooms: newRooms
    }
  })

  // LEAVE
  .handleAction(webSocketLeaveRoomSuccessAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, string>): IWebSocketConnectionReducerState => {
    // const indexOfRoom = state.rooms.indexOf(action.payload);
    // const rooms = state.rooms;
    // if (indexOfRoom !== -1) {
    //   rooms.splice(indexOfRoom, 1);
    // }
    return {
      ...state,
      // rooms
    }
  })
;
