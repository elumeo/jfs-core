import { configLoadedAction, loadConfig } from '../../Action/ConfigAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import IConfig from 'Types/Configuration';

namespace Configuration {
  export type State<T> = {
    config: T;
    pending: boolean;
    loaded: boolean;
  }
}

const initialState = {
  config: null,
  pending: false,
  loaded: false
};

const Configuration = createReducer<Configuration.State<IConfig>>(initialState)
  .handleAction(
    loadConfig,
    (state: Configuration.State<IConfig>) => (
      {...state, pending: true, loaded: false}
    )
  )
  .handleAction(
    configLoadedAction,
    (
      state: Configuration.State<IConfig>,
      action: PayloadAction<string, any>
    ) => (
      {...state, ...action.payload, pending: false, loaded: true}
    )
  );

export default Configuration;
