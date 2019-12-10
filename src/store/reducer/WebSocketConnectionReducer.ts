import { createReducer, PayloadAction } from 'typesafe-actions';

import JSCApi from '../../JscApi';
import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketConnectFailedAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomSuccessAction,
  webSocketJoinRoomLoadingAction,
  webSocketJoinRoomFailureAction, webSocketDisconnectSuccessAction
} from '../action/WebSocketAction';

export interface IWebSocketJoinRoom {
  room: string;
  error?: string;
}

export interface IWebSocketUpdateRoom<T> {
  roomData: JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<T>;
}

export interface IWebSocketConnectionReducerState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  rooms: IWebSocketRoomConnection[];
}

const initialState: IWebSocketConnectionReducerState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null,
  rooms: []
};

export interface IWebSocketRoomConnection {
  isJoining: boolean;
  hasJoined: boolean;
  name: string;
  error: string;
}

export const webSocketConnectionReducer = createReducer(initialState)

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
    isConnected: false
  }))

  .handleAction(webSocketDisconnectSuccessAction, (state: IWebSocketConnectionReducerState): IWebSocketConnectionReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: false,
    connectionError: null,
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
    const newRooms: IWebSocketRoomConnection[] = [];
    for(const room of state.rooms) {
      if(room.name !== action.payload) {
        newRooms.push(room);
      } else {
        const newRoom = {
          ...room
        };
        newRoom.hasJoined = false;
        newRoom.isJoining = false;
        newRooms.push(newRoom);
      }
    }
    return {
      ...state,
      rooms: newRooms
    }
  })
;
