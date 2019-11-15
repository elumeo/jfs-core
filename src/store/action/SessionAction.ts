import { createAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

const featureName = 'session';

export const checkSession = createAction(featureName + '/CHECK')();

export interface ICheckLoginPayload {
    username: string;
    password: string;
}

export const checkLogin = createAction(featureName + '/LOGIN')<ICheckLoginPayload>();
export const loggedIn = createAction(featureName + '/LOGGED_IN')();
export const loginFailed = createAction(featureName + '/LOGIN_FAILED')();

export interface ILogoutPayload {
  sessionDTO?: ISessionDTO;
}
export const logout = createAction(featureName + '/LOGOUT')<ILogoutPayload>();

export interface IAuthorizeSessionPayload {
  frontendSessionDTO: IFrontendSessionDTO;
}

export const authorizeSession = createAction(featureName + '/AUTHORIZE')<IAuthorizeSessionPayload>();
export const unauthorizeSession = createAction(featureName + '/UNAUTHORIZE')();
