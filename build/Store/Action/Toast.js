import { createStandardAction } from 'typesafe-actions';
export const addToastAction = createStandardAction('toast/ADD')();
export const dismissToastAction = createStandardAction('toast/DELETE')();
