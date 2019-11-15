import { createStandardAction } from 'typesafe-actions';

const featureName = 'login';

export const openLoginDialog = createStandardAction(featureName + '/OPEN')();
export const closeLoginDialog = createStandardAction(featureName + '/CLOSE')();
