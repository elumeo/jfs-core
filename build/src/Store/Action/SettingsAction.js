import { createStandardAction } from 'typesafe-actions';
const featureName = 'settings';
export const openSettings = createStandardAction(featureName + '/OPEN')();
export const closeSettings = createStandardAction(featureName + '/CLOSE')();
//# sourceMappingURL=SettingsAction.js.map