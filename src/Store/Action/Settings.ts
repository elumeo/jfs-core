import { createAction } from 'typesafe-actions';

export const openSettings = createAction('settings/OPEN')();
export const closeSettings = createAction('settings/CLOSE')();
