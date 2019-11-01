import { createStandardAction } from "typesafe-actions";

export const loadConfig = createStandardAction('config/LOAD')();
export const configLoading = createStandardAction('config/LOADING')();
export const configLoadedAction = createStandardAction('config/LOADED')<any>();
export const loadConfigFailed = createStandardAction('config/LOAD_FAILED')();
