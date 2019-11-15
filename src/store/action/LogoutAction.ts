import { createAction } from 'typesafe-actions';

const featureName = 'logout';

export const openLogout = createAction(featureName + '/OPEN')();
export const closeLogout = createAction(featureName + '/CLOSE')();
