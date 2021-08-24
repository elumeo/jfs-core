import { createAction } from 'typesafe-actions';
import * as Type from 'Types/Login';

export const openLoginDialog = createAction('login/OPEN')();
export const closeLoginDialog = createAction('login/CLOSE')();

export const checkLogin = createAction('login/CHECK')<Type.Credentials>();
export const loggedIn = createAction('login/LOGGED_IN')();
export const loginFailed = createAction('login/LOGIN_FAILED')();
