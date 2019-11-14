import { createStandardAction } from 'typesafe-actions';

export const openLoginDialog = createStandardAction('login/OPEN')();
export const closeLoginDialog = createStandardAction('login/CLOSE')();
