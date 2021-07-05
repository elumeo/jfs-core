import { createStandardAction } from 'typesafe-actions';
export const openLoginDialog = createStandardAction('login/OPEN')();
export const closeLoginDialog = createStandardAction('login/CLOSE')();
export const checkLogin = (createStandardAction('login/CHECK')());
export const loggedIn = createStandardAction('login/LOGGED_IN')();
export const loginFailed = createStandardAction('login/LOGIN_FAILED')();
