import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
import * as Type from 'Types/Configuration';
import { ActionType } from 'Types/Redux';

export type State<T> = {
  config: T;
  pending: boolean;
  loaded: boolean;
};

const initialState: State<Type.Configuration> = {
  config: null,
  pending: false,
  loaded: false
};

const Configuration = createReducer<State<Type.Configuration>, ActionType>(initialState)
  .handleAction(
    Action.loadConfig,
    state => ({...state, pending: true, loaded: false})
  )
  .handleAction(
    Action.configLoadedAction,
    (state, action) => ({
      ...state,
      ...action.payload,
      pending: false,
      loaded: true
    })
  );

export default Configuration;
