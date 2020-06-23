import { createStandardAction } from 'typesafe-actions';
const featureName = 'session';
export const loadSession = createStandardAction(`${featureName}/LOAD`)();
export const checkSession = createStandardAction(featureName + '/CHECK')();
export const logout = (createStandardAction(featureName + '/LOGOUT')());
export const authorizeSession = (createStandardAction(featureName + '/AUTHORIZE')());
export const unauthorizeSession = (createStandardAction(featureName + '/UNAUTHORIZE')());
//# sourceMappingURL=SessionAction.js.map