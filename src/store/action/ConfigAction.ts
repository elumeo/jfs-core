import { createStandardAction } from 'typesafe-actions';
import IConfig from '../../base/IConfig';

const featureName = 'config';

export const loadConfig = createStandardAction('config/LOAD')();

export interface IConfigLoadedPayload {
  config: IConfig;
}
export const configLoadedAction = createStandardAction(featureName + '/LOADED')<IConfigLoadedPayload>();
export const loadConfigFailed = createStandardAction(featureName + '/LOAD_FAILED')();
