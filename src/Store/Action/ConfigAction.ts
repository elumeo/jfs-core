import { createStandardAction } from 'typesafe-actions';
import IConfig from 'Types/Configuration';

const featureName = 'config';

export const loadConfig = createStandardAction('config/LOAD')();

export namespace ConfigLoaded {
  export type Payload = {
    config: IConfig;
  }
}
export const configLoadedAction = createStandardAction(featureName + '/LOADED')<ConfigLoaded.Payload>();
export const loadConfigFailed = createStandardAction(featureName + '/LOAD_FAILED')();
