import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketConnectFailedAction,
  webSocketJoinRoomRequestAction,
  webSocketJoinRoomSuccessAction,
  webSocketJoinRoomFailedAction
} from '../action/WebSocketAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface IWebSocketReducerState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  joinedRooms: string[];
}

const initialState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null,
  joinedRooms: []
};

export const webSocketReducer = createReducer(initialState)
  .handleAction(webSocketConnectRequestAction, (state: IWebSocketReducerState, action): IWebSocketReducerState => ({
    ...state,
    isConnecting: true,
    isConnected: false,
    connectionError: null
  }))
  .handleAction(webSocketConnectSuccessAction, (state: IWebSocketReducerState, action): IWebSocketReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: true,
    connectionError: null
  }))
  .handleAction(webSocketConnectFailedAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => ({
    ...state,
    isConnecting: false,
    isConnected: false,
    connectionError: action.payload
  }))

  .handleAction(webSocketJoinRoomSuccessAction, (state: IWebSocketReducerState, action: PayloadAction<string, string>): IWebSocketReducerState => {
    const indexOfRoom = state.joinedRooms.indexOf(action.payload);
    const joinedRooms = state.joinedRooms;
    console.log(indexOfRoom, joinedRooms);
    if (indexOfRoom === -1) {
      joinedRooms.push(action.payload);
    }
    return {
      ...state,
      joinedRooms
    }
  })
  .handleAction(webSocketJoinRoomFailedAction, (state: IWebSocketReducerState, action: PayloadAction<string, any>) => ({
    ...state
  }))
;
