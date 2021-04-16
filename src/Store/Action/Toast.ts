import { Toast } from 'Types/Toast';
import { createStandardAction } from 'typesafe-actions';

export const addToastAction = createStandardAction('toast/ADD')<Toast>();
export const dismissToastAction = createStandardAction('toast/DELETE')();
