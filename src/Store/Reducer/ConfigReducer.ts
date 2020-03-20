import { configLoadedAction, loadConfig } from '../Action/ConfigAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import IConfig from '../../Base/IConfig';

export interface IConfigReducerState<T> {
  config: T;
  pending: boolean;
  loaded: boolean;
}

const initialState = {
  config: null,
  pending: false,
  loaded: false
};

export const configReducer = createReducer(initialState)
  .handleAction(loadConfig, (state: IConfigReducerState<IConfig>) => (
    {...state, pending: true, loaded: false}
  ))
  .handleAction(
    configLoadedAction,
    (state: IConfigReducerState<IConfig>, action: PayloadAction<string, any>) => (
      {...state, ...action.payload, pending: false, loaded: true}
    ))
;
