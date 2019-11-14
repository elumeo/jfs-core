import { createStandardAction } from 'typesafe-actions';
import IConfig from '../../base/IConfig';

export const loadConfig = createStandardAction('config/LOAD')();

export interface IConfigLoadedPayload {
  config: IConfig;
}
export const configLoadedAction = createStandardAction('config/LOADED')<IConfigLoadedPayload>();
export const loadConfigFailed = createStandardAction('config/LOAD_FAILED')();
