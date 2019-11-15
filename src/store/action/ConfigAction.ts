import { createAction } from 'typesafe-actions';
import IConfig from '../../base/IConfig';

const featureName = 'config';

export const loadConfig = createAction('config/LOAD')();

export interface IConfigLoadedPayload {
  config: IConfig;
}
export const configLoadedAction = createAction(featureName + '/LOADED')<IConfigLoadedPayload>();
export const loadConfigFailed = createAction(featureName + '/LOAD_FAILED')();
