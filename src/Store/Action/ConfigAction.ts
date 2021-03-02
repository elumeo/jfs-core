import { createStandardAction } from 'typesafe-actions';
import IConfig from 'Types/Configuration';

export const loadConfig = createStandardAction('config/LOAD')();

export namespace ConfigLoaded {
  export type Payload = {
    config: IConfig;
  }
}
export const configLoadedAction = createStandardAction('config/LOADED')<ConfigLoaded.Payload>();
export const loadConfigFailed = createStandardAction('config/LOAD_FAILED')();
