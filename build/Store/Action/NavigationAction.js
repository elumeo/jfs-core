import { createStandardAction } from 'typesafe-actions';
const featureName = 'navigation';
export const openNavigation = createStandardAction(featureName + '/OPEN')();
export const closeNavigation = createStandardAction(featureName + '/CLOSE')();
//# sourceMappingURL=NavigationAction.js.map