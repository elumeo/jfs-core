import { createAction } from 'typesafe-actions';
import { Location } from 'history';

export type RouteDetails = {
  location: Location;
  params: Record<string, string>;
};

export const enterAuthorizedRoute = createAction('route/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute = createAction(
  'route/ENTER_UNAUTHORIZED',
)();
export const updateRouteDetails = createAction('route/UPDATE')<RouteDetails>();
