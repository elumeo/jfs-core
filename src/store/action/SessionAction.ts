import { createStandardAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export const checkSession = createStandardAction('session/CHECK')();

export interface ICheckLoginPayload {
    username: string;
    password: string;
};

export const checkLogin = (
  createStandardAction('session/LOGIN')<ICheckLoginPayload>()
);
export const loggedIn = createStandardAction('session/LOGGED_IN')();

export const loginFailed = createStandardAction('session/LOGIN_FAILED')();

export interface ILogoutPayload {
  sessionDTO?: ISessionDTO;
}

export const logout = (
  createStandardAction('session/LOGOUT')<ILogoutPayload>()
);

export interface IAuthorizeSessionPayload {
  frontendSessionDTO: IFrontendSessionDTO;
}

export const authorizeSession = (
  createStandardAction('session/AUTHORIZE')<IAuthorizeSessionPayload>()
);
export const unauthorizeSession = createStandardAction('session/UNAUTHORIZE')();
