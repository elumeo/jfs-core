import { createReducer, PayloadAction } from 'typesafe-actions';
import IAppConfig from 'Setup/IAppConfig';
import { configLoadedAction, ConfigLoaded }from '@elumeo/jfs-core/build/Store/Action/ConfigAction';

namespace Config {
  export type State = {
    config: IAppConfig;
  };
}

const initialState = {
  config: null
};

const Config = createReducer<Config.State>(initialState)
  .handleAction(
    configLoadedAction,
    (
      _state,
      action: PayloadAction<string, ConfigLoaded.Payload>
    ) => ({
      config: action.payload.config
    })
  );

export default Config;
