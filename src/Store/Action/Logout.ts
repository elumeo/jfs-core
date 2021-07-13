import { createAction } from 'typesafe-actions';

export const openLogout = createAction('logout/OPEN')();
export const closeLogout = createAction('logout/CLOSE')();
export const logoutFinished = createAction(`logout/FINISHED`)();
