import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketConnectFailedAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomSuccessAction,
  webSocketJoinRoomLoadingAction,
  webSocketJoinRoomFailureAction
} from '../action/WebSocketAction';
import { createReducer, PayloadAC, PayloadAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';

export interface IWebSocketJoinRoom {
  room: string;
  action: PayloadAC<string, any>
}

export interface IWebSocketJoiningRoom {
  roomState: IWebSocketRoom;
  action: PayloadAC<string, any>
}

export interface IWebSocketUpdateRoom {
  roomData: JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>;
  action: PayloadAC<string, any>
}

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
  error: string;
}

const initialState: IWebSocketReducerState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null,
  joinedRooms: []
};

export const webSocketReducer = createReducer(initialState)
  // CONNECT
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

  // JOIN
  .handleAction(webSocketJoinRoomLoadingAction, (state: IWebSocketReducerState, action: PayloadAction<string, IWebSocketJoiningRoom>): IWebSocketReducerState => {
    const rooms = state.joinedRooms;
    const newRooms: IWebSocketRoom[] = [];
    for(const room of state.joinedRooms) {
      if(room.name !== action.payload.roomState.name) {
        newRooms.push(room);
      }
    }
    newRooms.push(action.payload.roomState);
    return {
      ...state,
      joinedRooms: newRooms
    }
  })

  .handleAction(webSocketJoinRoomSuccessAction, (state: IWebSocketReducerState, action: PayloadAction<string, IWebSocketJoiningRoom>): IWebSocketReducerState => {
    const rooms = state.joinedRooms;
    const newRooms: IWebSocketRoom[] = [];
    for(const room of state.joinedRooms) {
      if(room.name !== action.payload.roomState.name) {
        newRooms.push(room);
      }
    }
    newRooms.push(action.payload.roomState);
    return {
      ...state,
      joinedRooms: newRooms
    }
  })
  .handleAction(webSocketJoinRoomFailureAction, (state: IWebSocketReducerState, action: PayloadAction<string, IWebSocketRoom>): IWebSocketReducerState => {
    const rooms = state.joinedRooms;
    const newRooms: IWebSocketRoom[] = [];
    for(const room of state.joinedRooms) {
      if(room.name !== action.payload.name) {
        newRooms.push(room);
      }
    }
    newRooms.push(action.payload);
    return {
      ...state,
      joinedRooms: newRooms
    }
  })

  // LEAVE
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
