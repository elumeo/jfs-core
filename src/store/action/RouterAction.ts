import { createAction } from 'typesafe-actions';

const featureName = 'route';

export const enterAuthorizedRoute = createAction(featureName + '/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute = createAction(featureName + '/ENTER_UNAUTHORIZED')();
