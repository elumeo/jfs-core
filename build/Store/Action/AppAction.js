import { createStandardAction } from 'typesafe-actions';
const featureName = 'app';
export const initializeApp = (createStandardAction(featureName + '/INITIALZE')());
export const appInitialized = createStandardAction(featureName + '/INITIALZED')();
//# sourceMappingURL=AppAction.js.map