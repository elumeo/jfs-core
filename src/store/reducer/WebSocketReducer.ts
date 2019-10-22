import { webSocketConnectRequestAction, webSocketConnectSuccessAction, webSocketConnectFailedAction } from '../action/WebSocketAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface IWebSocketReducerState {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
}

const initialState = {
  isConnected: false,
  isConnecting: false,
  connectionError: null
};

export const webSocketReducer = createReducer(initialState)
  .handleAction(webSocketConnectRequestAction, (state: IWebSocketReducerState) => ({
    ...state,
    isConnecting: true,
    isConnected: false,
    connectionError: null
  }))
  .handleAction(webSocketConnectSuccessAction, (state: IWebSocketReducerState) => ({
    ...state,
    isConnecting: false,
    isConnected: true,
    connectionError: null
  }))
  .handleAction(webSocketConnectFailedAction, (state: IWebSocketReducerState, action: PayloadAction<string, any>) => ({
    ...state,
    isConnecting: false,
    isConnected: false,
    connectionError: action.payload
  }))
;
