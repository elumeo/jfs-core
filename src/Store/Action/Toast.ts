import { IToastConfig } from 'Store/Reducer/Core/Toast';
import { createStandardAction } from 'typesafe-actions';

export const addToastAction = createStandardAction('toast/ADD')<IToastConfig>();
export const dismissToastAction = createStandardAction('toast/DELETE')();
