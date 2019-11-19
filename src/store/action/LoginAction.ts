import { createStandardAction } from 'typesafe-actions';

const featureName = 'login';

export const openLoginDialog = createStandardAction(featureName + '/OPEN')();
export const closeLoginDialog = createStandardAction(featureName + '/CLOSE')();

export interface IUpdateCredentialsPayload {
  username: string;
  password: string;
}

export const updateCredentials = (
  createStandardAction(`${featureName}/UPDATE_CREDENTIALS`)<IUpdateCredentialsPayload>()
);

export interface ICheckLoginPayload {
  username: string;
  password: string;
}

export const checkLogin = createStandardAction(featureName + '/CHECK')<ICheckLoginPayload>();
export const loggedIn = createStandardAction(featureName + '/LOGGED_IN')();
export const loginFailed = createStandardAction(featureName + '/LOGIN_FAILED')();
