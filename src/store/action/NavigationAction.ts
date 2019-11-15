import { createAction } from 'typesafe-actions';

const featureName = 'navigation';

export const openNavigation = createAction(featureName + '/OPEN')();
export const closeNavigation = createAction(featureName + '/CLOSE')();
