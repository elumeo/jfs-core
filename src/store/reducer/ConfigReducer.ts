import { configLoadedAction, loadConfig } from '../action/ConfigAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import IConfig from '../../base/IConfig';

export interface IConfigReducerState {
  config: IConfig;
  pending: boolean;
  loaded: boolean;
}

const initialState = {
  config: null,
  pending: false,
  loaded: false
};

export const configReducer = createReducer(initialState)
  .handleAction(loadConfig, (state: IConfigReducerState) => (
    { ...state, pending: true, loaded: false }
  ))
  .handleAction(
    configLoadedAction,
    (state: IConfigReducerState, action: PayloadAction<string, any>) => (
    { ...state, ...action.payload, pending: false, loaded: true }
  ));
