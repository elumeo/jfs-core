import { createStandardAction } from 'typesafe-actions';
const featureName = 'config';
export const loadConfig = createStandardAction('config/LOAD')();
export const configLoadedAction = createStandardAction(featureName + '/LOADED')();
export const loadConfigFailed = createStandardAction(featureName + '/LOAD_FAILED')();
//# sourceMappingURL=ConfigAction.js.map