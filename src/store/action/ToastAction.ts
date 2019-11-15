import { IToastConfig } from '../reducer/ToastReducer';
import { createAction } from 'typesafe-actions';

const featureName = 'toast';

export const addToastAction = createAction(featureName + '/ADD')<IToastConfig>();
export const dismissToastAction = createAction(featureName + '/DELETE')();
