import { createStandardAction } from 'typesafe-actions';
const featureName = 'login';
export const openLoginDialog = createStandardAction(featureName + '/OPEN')();
export const closeLoginDialog = createStandardAction(featureName + '/CLOSE')();
export const updateCredentials = (createStandardAction(`${featureName}/UPDATE_CREDENTIALS`)());
export const checkLogin = (createStandardAction(featureName + '/CHECK')());
export const loggedIn = createStandardAction(featureName + '/LOGGED_IN')();
export const loginFailed = createStandardAction(featureName + '/LOGIN_FAILED')();
//# sourceMappingURL=LoginAction.js.map