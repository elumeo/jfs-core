import { createAction } from 'typesafe-actions';

const featureName = 'settings';

export const openSettings = createAction(featureName + '/OPEN')();
export const closeSettings = createAction(featureName + '/CLOSE')();
