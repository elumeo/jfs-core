import { createAction } from 'typesafe-actions';
import { Configuration } from 'Types/Configuration';

export const loadConfig = createAction('config/LOAD')();

export namespace ConfigLoaded {
  export type Payload = {
    config: Configuration;
  }
}
export const configLoadedAction = createAction('config/LOADED')<ConfigLoaded.Payload>();
export const loadConfigFailed = createAction('config/LOAD_FAILED')();
