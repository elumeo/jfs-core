import { createStandardAction } from 'typesafe-actions';

export const openLogout = createStandardAction('logout/OPEN')();
export const closeLogout = createStandardAction('logout/CLOSE')();
