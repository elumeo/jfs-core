import { enterAuthorizedRoute, enterUnauthorizedRoute } from '../../Action/RouterAction';
import { createReducer } from 'typesafe-actions';

namespace Router {
  export type State = {
    routeType: 'authorized' | 'unauthorized';
  }
}

const initialState: Router.State = {
  routeType: null
};

const Router = createReducer<Router.State>(initialState)
  .handleAction(enterAuthorizedRoute, (state: Router.State) => (
    {...state, routeType: 'authorized'}
  ))
  .handleAction(enterUnauthorizedRoute, (state: Router.State) => (
    {...state, routeType: 'unauthorized'}
  ));

export default Router;
