import { createStandardAction } from 'typesafe-actions';
const featureName = 'toast';
export const addToastAction = createStandardAction(featureName + '/ADD')();
export const dismissToastAction = createStandardAction(featureName + '/DELETE')();
//# sourceMappingURL=ToastAction.js.map