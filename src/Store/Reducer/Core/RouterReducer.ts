// noinspection ES6PreferShortImport
import {
  enterAuthorizedRoute,
  enterUnauthorizedRoute,
  RouteDetails,
  updateRouteDetails
} from '../../Action/RouterAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { Location } from 'history';

namespace Router {
  export type State = {
    routeType: 'authorized' | 'unauthorized';
    location: Location;
    params
  }
}

const initialState: Router.State = {
  routeType: null,
  location: undefined,
  params: undefined
};

const Router = createReducer<Router.State>(initialState)
  .handleAction(enterAuthorizedRoute, (state): Router.State => (
    { ...state, routeType: 'authorized' }
  ))
  .handleAction(enterUnauthorizedRoute, (state): Router.State => (
    { ...state, routeType: 'unauthorized' }
  ))
  .handleAction(updateRouteDetails, (state: Router.State, { payload: { location, params } }: PayloadAction<string, RouteDetails>): Router.State => (
    { ...state, location, params }
  ))
;

export default Router;
