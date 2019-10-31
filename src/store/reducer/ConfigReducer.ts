import { loadConfig, configLoadedAction, configLoading } from '../action/ConfigAction';
import { createReducer, PayloadAction } from "typesafe-actions";

export interface IConfigReducerState {
  RobotUsername: string;
  RobotPassword: string;
  Language: string;
  Currency: string;
  ForceHTTPS: boolean;
  pending: boolean;
  loaded: boolean;
}

const initialState = {
  pending: false,
  loaded: false,
};

export const configReducer = createReducer(initialState)
  .handleAction([loadConfig, configLoading], (state: IConfigReducerState) => ({
    ...state,
    pending: true,
    loaded: false
  }))
  .handleAction(
    configLoadedAction,
    (
      state: IConfigReducerState,
      action: PayloadAction<string, any>
    ) => ({
      ...state,
      ...action.payload,
      pending: false,
      loaded: true
    })
  );
