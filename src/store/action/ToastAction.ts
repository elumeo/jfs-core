import { IToastConfig } from '../reducer/ToastReducer';
import { createStandardAction } from 'typesafe-actions';

const featureName = 'toast';

export const addToastAction = createStandardAction(featureName + '/ADD')<IToastConfig>();
export const dismissToastAction = createStandardAction(featureName + '/DELETE')();
