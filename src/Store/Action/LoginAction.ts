import { createStandardAction } from 'typesafe-actions';

const featureName = 'login';

export const openLoginDialog = createStandardAction(featureName + '/OPEN')();
export const closeLoginDialog = createStandardAction(featureName + '/CLOSE')();

export namespace updateCredentials {
  export type Payload = {
    username: string;
    password: string;
  }
}

export const updateCredentials = (
  createStandardAction(`${featureName}/UPDATE_CREDENTIALS`)<updateCredentials.Payload>()
);

export namespace checkLogin {
  export type Payload = {
    username: string;
    password: string;
  }
}

export const checkLogin = (
  createStandardAction(featureName + '/CHECK')<checkLogin.Payload>()
);
export const loggedIn = createStandardAction(featureName + '/LOGGED_IN')();
export const loginFailed = createStandardAction(featureName + '/LOGIN_FAILED')();
