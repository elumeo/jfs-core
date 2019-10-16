import { createStandardAction } from 'typesafe-actions';

export const enterAuthorizedRoute = createStandardAction('route/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute = createStandardAction('route/ENTER_UNAUTHORIZED')();
