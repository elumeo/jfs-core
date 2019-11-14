import { createStandardAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

const featureName = 'session';

export const checkSession = createStandardAction(featureName + '/CHECK')();

export interface ICheckLoginPayload {
    username: string;
    password: string;
}

export const checkLogin = createStandardAction(featureName + '/LOGIN')<ICheckLoginPayload>();
export const loggedIn = createStandardAction(featureName + '/LOGGED_IN')();
export const loginFailed = createStandardAction(featureName + '/LOGIN_FAILED')();

export interface ILogoutPayload {
  sessionDTO?: ISessionDTO;
}
export const logout = createStandardAction(featureName + '/LOGOUT')<ILogoutPayload>();

export interface IAuthorizeSessionPayload {
  frontendSessionDTO: IFrontendSessionDTO;
}

export const authorizeSession = createStandardAction(featureName + '/AUTHORIZE')<IAuthorizeSessionPayload>();
export const unauthorizeSession = createStandardAction(featureName + '/UNAUTHORIZE')();
