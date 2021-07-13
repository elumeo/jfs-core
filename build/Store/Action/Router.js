import { createAction } from 'typesafe-actions';
export const enterAuthorizedRoute = createAction('route/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute = createAction('route/ENTER_UNAUTHORIZED')();
export const updateRouteDetails = createAction('route/UPDATE')();
