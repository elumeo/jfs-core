import { createAction } from 'typesafe-actions';

import JSCApi from 'API/JSC';
type IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export const loadSession = createAction(`session/LOAD`)();

export const checkSession = createAction('route/CHECK')();

export namespace logout {
  export type Payload = {
    sessionDTO?: ISessionDTO;
  }
}

export const logout = (
  createAction('route/LOGOUT')<logout.Payload>()
);

export namespace authorizeSession {
  export type Payload = {
    frontendSessionDTO: IFrontendSessionDTO;
  }
}

export const authorizeSession = (
  createAction('route/AUTHORIZE')<authorizeSession.Payload>()
);

export const unauthorizeSession = (
  createAction('route/UNAUTHORIZE')()
);
