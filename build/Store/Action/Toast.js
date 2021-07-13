import { createAction } from 'typesafe-actions';
export const addToastAction = createAction('toast/ADD')();
export const dismissToastAction = createAction('toast/DELETE')();
