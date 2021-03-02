import { createStandardAction } from 'typesafe-actions';

import JSCApi from 'Jsc/Api/index';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

const featureName = 'session';

export const loadSession = createStandardAction(`${featureName}/LOAD`)();

export const checkSession = createStandardAction(featureName + '/CHECK')();

export namespace logout {
  export type Payload = {
    sessionDTO?: ISessionDTO;
  }
}

export const logout = (
  createStandardAction(featureName + '/LOGOUT')<logout.Payload>()
);

export namespace authorizeSession {
  export type Payload = {
    frontendSessionDTO: IFrontendSessionDTO;
  }
}

export const authorizeSession = (
  createStandardAction(featureName + '/AUTHORIZE')<authorizeSession.Payload>()
);

export const unauthorizeSession = (
  createStandardAction(featureName + '/UNAUTHORIZE')()
);
