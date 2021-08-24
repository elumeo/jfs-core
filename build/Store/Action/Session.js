import { createAction } from 'typesafe-actions';
export const loadSession = createAction(`session/LOAD`)();
export const checkSession = createAction('route/CHECK')();
export const logout = createAction('route/LOGOUT')();
export const authorizeSession = createAction('route/AUTHORIZE')();
export const unauthorizeSession = createAction('route/UNAUTHORIZE')();
