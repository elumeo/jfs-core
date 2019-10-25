import { loadConfig, configLoadedAction } from '../action/ConfigAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface IConfigReducerState {
  RobotUsername: string;
  RobotPassword: string;
  Language: string;
  ForceHTTPS: boolean;
  pending: boolean;
  loaded: boolean;
  JscClient: {
    Host: string;
  };
  WebSocketClient: {
    Host: string;
    PrivateNamespace: string;
    AutoJoinRooms: string[];
  };
}

const initialState: IConfigReducerState = {
  pending: false,
  loaded: false,
  RobotUsername: null,
  RobotPassword: null,
  Language: null,
  ForceHTTPS: true,
  JscClient: null,
  WebSocketClient: null
};

export const configReducer = createReducer<IConfigReducerState>(initialState)
  .handleAction(loadConfig, (state: IConfigReducerState) => ({
    ...state,
    pending: true,
    loaded: false
  }))
  .handleAction(configLoadedAction, (state: IConfigReducerState, action: PayloadAction<string, any>) => ({
    ...state,
    ...action.payload,
    pending: false,
    loaded: true
  }))
;
