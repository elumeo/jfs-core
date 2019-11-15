import { createStandardAction } from 'typesafe-actions';

const featureName = 'logout';

export const openLogout = createStandardAction(featureName + '/OPEN')();
export const closeLogout = createStandardAction(featureName + '/CLOSE')();
