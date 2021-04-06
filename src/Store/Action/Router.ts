import { createStandardAction, PayloadAction } from 'typesafe-actions';
import { Location } from 'history';

export type RouteDetails = { location: Location, params: {} };

export const enterAuthorizedRoute
  = createStandardAction('route/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute
  = createStandardAction('route/ENTER_UNAUTHORIZED')();
export const updateRouteDetails
  : (details: RouteDetails) => PayloadAction<string, RouteDetails>
  = createStandardAction('route/UPDATE')<RouteDetails>();
