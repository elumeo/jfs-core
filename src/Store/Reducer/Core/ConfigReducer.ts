import { configLoadedAction, loadConfig } from '../../Action/ConfigAction';
import { createReducer } from 'typesafe-actions';
import IConfig from 'Types/Configuration';
import { ActionType } from 'Types/Redux';

export type State<T> = {
  config: T;
  pending: boolean;
  loaded: boolean;
};

const initialState = {
  config: null,
  pending: false,
  loaded: false
};

const Configuration = createReducer<State<IConfig>, ActionType>(initialState)
  .handleAction(
    loadConfig,
    state => (
      {...state, pending: true, loaded: false}
    )
  )
  .handleAction(
    configLoadedAction,
    (state, action) => (
      {...state, ...action.payload, pending: false, loaded: true}
    )
  );

export default Configuration;
