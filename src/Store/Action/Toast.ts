import { Toast } from 'Types/Toast';
import { createAction } from 'typesafe-actions';

export const addToastAction = createAction('toast/ADD')<Toast>();
export const dismissToastAction = createAction('toast/DELETE')();
