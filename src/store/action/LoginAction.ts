import { createAction } from 'typesafe-actions';

const featureName = 'login';

export const openLoginDialog = createAction(featureName + '/OPEN')();
export const closeLoginDialog = createAction(featureName + '/CLOSE')();
