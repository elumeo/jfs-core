import { configLoadedAction, loadConfig } from '../action/ConfigAction';
import { createReducer, PayloadAction } from "typesafe-actions";

export interface IConfigReducerState {
  RobotUsername: string;
  RobotPassword: string;
  Language: string;
  Currency: string;
  ForceHTTPS: boolean;
  pending: boolean;
  loaded: boolean;
  Client?: {
    Host?: string;
    Timeout?: number;
  };
  JscClient: {
    Host: string;
  };
  WebSocketClient: {
    Host: string;
    PrivateNamespace: string;
    AutoJoinRooms: string[];
  };
}

const initialState = {
  pending: false,
  loaded: false
};

export const configReducer = createReducer(initialState)
  .handleAction(loadConfig, (state: IConfigReducerState) => (
    { ...state, pending: true, loaded: false }
  ))
  .handleAction(configLoadedAction, (state: IConfigReducerState, action: PayloadAction<string, any>) => (
    { ...state, ...action.payload, pending: false, loaded: true }
  ));
