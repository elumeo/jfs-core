import { createStandardAction } from 'typesafe-actions';
export const loadConfig = createStandardAction('config/LOAD')();
export const configLoadedAction = createStandardAction('config/LOADED')();
export const loadConfigFailed = createStandardAction('config/LOAD_FAILED')();
//# sourceMappingURL=Configuration.js.map