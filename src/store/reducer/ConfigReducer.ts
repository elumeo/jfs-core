import { loadConfig, configLoadedAction } from '../action/ConfigAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface IConfigReducerState {
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
  Language?: string;
  VAT?: number;
  Currency?: string;
  Container?: string;
  ContainerLanguage?: string;
  WithTimers?: boolean;
  WithCertificates?: boolean;
  AppName?: string;
  RobotUsername?: string;
  RobotPassword?: string;
  ForceHTTPS: boolean;
  pending: boolean;
  loaded: boolean;
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
