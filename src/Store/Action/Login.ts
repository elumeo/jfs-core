import { createStandardAction } from 'typesafe-actions';
import * as Type from 'Types/Login';

export const openLoginDialog = createStandardAction('login/OPEN')();
export const closeLoginDialog = createStandardAction('login/CLOSE')();

export const checkLogin = (
  createStandardAction('login/CHECK')<Type.Credentials>()
);
export const loggedIn = createStandardAction('login/LOGGED_IN')();
export const loginFailed = createStandardAction('login/LOGIN_FAILED')();
