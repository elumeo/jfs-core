import { createStandardAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;

export interface ICheckLoginPayload {
    username: string;
    password: string;
};

interface ISessionDTORequiredPayload {
  frontendSessionDTO: IFrontendSessionDTO;
}
interface ISessionDTOOptionalPayload {
  frontendSessionDTO?: IFrontendSessionDTO;
}

export interface ILoggedInPayload extends ISessionDTORequiredPayload {};
export interface IAuthorizeSessionPayload extends ISessionDTORequiredPayload {};
export interface ILogoutPayload extends ISessionDTOOptionalPayload {};

export const checkSession = createStandardAction('session/CHECK')();
export const checkLogin = createStandardAction('session/LOGIN')<ICheckLoginPayload>();
export const loggedIn = createStandardAction('session/LOGGED_IN')<ILoggedInPayload>();
export const logout = createStandardAction('session/LOGOUT')<ILogoutPayload>();
export const authorizeSession = createStandardAction('session/AUTHORIZE')<IAuthorizeSessionPayload>();
export const unauthorizeSession = createStandardAction('session/UNAUTHORIZE')();
