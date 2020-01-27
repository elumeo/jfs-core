import { createStandardAction } from 'typesafe-actions';
import JSCApi from '../../Jsc/JscApi';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

const featureName = 'session';

export const loadSession = createStandardAction(`${featureName}/LOAD`)();

export const checkSession = createStandardAction(featureName + '/CHECK')();

export interface ILogoutPayload {
  sessionDTO?: ISessionDTO;
}
export const logout = (
  createStandardAction(featureName + '/LOGOUT')<ILogoutPayload>()
);

export interface IAuthorizeSessionPayload {
  frontendSessionDTO: IFrontendSessionDTO;
}

export const authorizeSession = (
  createStandardAction(featureName + '/AUTHORIZE')<IAuthorizeSessionPayload>()
);
export const unauthorizeSession = (
  createStandardAction(featureName + '/UNAUTHORIZE')()
);
