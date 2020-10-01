import { createStandardAction, PayloadAction } from 'typesafe-actions';
import { Location } from 'history';

const featureName = 'route';

export type RouteDetails = { location: Location, params: {} };

export const enterAuthorizedRoute
  = createStandardAction(featureName + '/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute
  = createStandardAction(featureName + '/ENTER_UNAUTHORIZED')();
export const updateRouteDetails
  : (details: RouteDetails) => PayloadAction<string, RouteDetails>
  = createStandardAction(featureName + '/UPDATE')<RouteDetails>();
