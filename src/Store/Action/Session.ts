import { createStandardAction } from 'typesafe-actions';

import JSCApi from 'API/JSC';
type IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export const loadSession = createStandardAction(`session/LOAD`)();

export const checkSession = createStandardAction('route/CHECK')();

export namespace logout {
  export type Payload = {
    sessionDTO?: ISessionDTO;
  }
}

export const logout = (
  createStandardAction('route/LOGOUT')<logout.Payload>()
);

export namespace authorizeSession {
  export type Payload = {
    frontendSessionDTO: IFrontendSessionDTO;
  }
}

export const authorizeSession = (
  createStandardAction('route/AUTHORIZE')<authorizeSession.Payload>()
);

export const unauthorizeSession = (
  createStandardAction('route/UNAUTHORIZE')()
);
