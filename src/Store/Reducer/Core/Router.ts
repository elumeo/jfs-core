import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
import { Location } from 'history';
import { ActionType } from 'Types/Redux';

export type State = {
  routeType: 'authorized' | 'unauthorized';
  location: Location;
  params: Record<string, string>;
};

const initialState: State = {
  routeType: null,
  location: undefined,
  params: undefined,
};

const Router = createReducer<State, ActionType>(initialState)
  .handleAction(Action.enterAuthorizedRoute, state => ({
    ...state,
    routeType: 'authorized',
  }))
  .handleAction(Action.enterUnauthorizedRoute, state => ({
    ...state,
    routeType: 'unauthorized',
  }))
  .handleAction(
    Action.updateRouteDetails,
    (state, { payload: { location, params } }) => ({
      ...state,
      location,
      params,
    }),
  );
export default Router;
