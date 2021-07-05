import { createStandardAction } from 'typesafe-actions';

export const openLoginDialog = createStandardAction('login/OPEN')();
export const closeLoginDialog = createStandardAction('login/CLOSE')();

export namespace checkLogin {
  export type Payload = {
    username: string;
    password: string;
  }
}

export const checkLogin = (
  createStandardAction('login/CHECK')<checkLogin.Payload>()
);
export const loggedIn = createStandardAction('login/LOGGED_IN')();
export const loginFailed = createStandardAction('login/LOGIN_FAILED')();
