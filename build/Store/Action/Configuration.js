import { createAction } from 'typesafe-actions';
export const loadConfig = createAction('config/LOAD')();
export const configLoadedAction = createAction('config/LOADED')();
export const loadConfigFailed = createAction('config/LOAD_FAILED')();
