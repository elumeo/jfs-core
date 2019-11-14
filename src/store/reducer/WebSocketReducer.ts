import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketConnectFailedAction, webSocketJoinRoomSuccessAction, webSocketLeaveRoomSuccessAction
} from '../action/WebSocketAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface IWebSocketReducerState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  joinedRooms: string[];
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

  .handleAction(webSocketJoinRoomSuccessAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => {
    const indexOfRoom = state.joinedRooms.indexOf(action.payload);
    const joinedRooms = state.joinedRooms;
    if (indexOfRoom === -1) {
      joinedRooms.push(action.payload);
    }
    return {
      ...state,
      joinedRooms
    }
  })
  .handleAction(webSocketLeaveRoomSuccessAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => {
    const indexOfRoom = state.joinedRooms.indexOf(action.payload);
    const joinedRooms = state.joinedRooms;
    if (indexOfRoom !== -1) {
      joinedRooms.splice(indexOfRoom, 1);
    }
    return {
      ...state,
      joinedRooms
    }
  })
;
