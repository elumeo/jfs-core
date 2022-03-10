import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
import { ActionType } from 'Types/Redux';

export type State = {
  routeType: 'authorized' | 'unauthorized';
};

const initialState: State = {
  routeType: null,
};

const Router = createReducer<State, ActionType>(initialState)
  .handleAction(Action.enterAuthorizedRoute, () => ({
    routeType: 'authorized',
  }))
  .handleAction(Action.enterUnauthorizedRoute, () => ({
    routeType: 'unauthorized',
  }))
export default Router;
