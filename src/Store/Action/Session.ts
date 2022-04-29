import { createAction } from 'typesafe-actions';

import JSCApi from 'API/JSC';
type IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export const loadSession = createAction(`session/LOAD`)();

export const checkSession = createAction('route/CHECK')();
// export type LogoutParam = {
//   sessionDTO?: ISessionDTO;
// }
export const logout = createAction('route/LOGOUT')();

export const authorizeSession = createAction('route/AUTHORIZE')<{
  frontendSessionDTO: IFrontendSessionDTO;
}>();

export const unauthorizeSession = createAction('route/UNAUTHORIZE')();
