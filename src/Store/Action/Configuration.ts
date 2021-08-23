import { createAction } from 'typesafe-actions';
import { Configuration } from 'Types/Configuration';

export const loadConfig = createAction('config/LOAD')();

export const configLoadedAction = createAction('config/LOADED')<{
  config: Configuration;
}>();
export const loadConfigFailed = createAction('config/LOAD_FAILED')();
