import { createReducer } from 'typesafe-actions';
import * as Action from '@elumeo/jfs-core/build/Store/Action';
import { Configuration } from '@elumeo/jfs-core/build/Types/Configuration';

export type State = {
  config: Configuration;
};

const initialState = {
  config: null
};

const Config = createReducer<State>(initialState)
  .handleAction(
    Action.configLoadedAction,
    (_state, action) => ({
      config: action.payload.config
    })
  );

export default Config;
