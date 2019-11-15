import { createStandardAction } from 'typesafe-actions';

const featureName = 'route';

export const enterAuthorizedRoute = createStandardAction(featureName + '/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute = createStandardAction(featureName + '/ENTER_UNAUTHORIZED')();
