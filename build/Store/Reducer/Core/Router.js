import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
const initialState = {
    routeType: null,
    location: undefined,
    params: undefined
};
const Router = createReducer(initialState)
    .handleAction(Action.enterAuthorizedRoute, state => (Object.assign(Object.assign({}, state), { routeType: 'authorized' })))
    .handleAction(Action.enterUnauthorizedRoute, state => (Object.assign(Object.assign({}, state), { routeType: 'unauthorized' })))
    .handleAction(Action.updateRouteDetails, (state, { payload: { location, params } }) => (Object.assign(Object.assign({}, state), { location, params })));
export default Router;
