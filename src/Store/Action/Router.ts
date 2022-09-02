import { createAction } from 'typesafe-actions';
import { Location, HashHistory } from 'history';
export { push, back, replace, forward } from '@lagunovsky/redux-react-router'
export type RouteDetails = {
  location: Location;
  params: Record<string, string>;
};

export const enterAuthorizedRoute = createAction('route/ENTER_AUTHORIZED')();
export const enterUnauthorizedRoute = createAction(
  'route/ENTER_UNAUTHORIZED',
)();
export const customRoutingTest = createAction('route/customRoutingTest')<string, HashHistory>();
