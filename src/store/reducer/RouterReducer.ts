import { enterAuthorizedRoute, enterUnauthorizedRoute } from '../action/RouterAction';
import { createReducer } from "typesafe-actions";

export interface IRouterReducerState {
  routeType: string;
}

const initialState: IRouterReducerState = {
  routeType: null
};

export const routerReducer = createReducer(initialState)
  .handleAction(enterAuthorizedRoute, (state: IRouterReducerState) => (
    { ...state, routeType: 'authorized' }
  ))
  .handleAction(enterUnauthorizedRoute, (state: IRouterReducerState) => (
    { ...state, routeType: 'unauthorized' }
  ))
;
