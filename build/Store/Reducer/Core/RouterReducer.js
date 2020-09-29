// noinspection ES6PreferShortImport
import { enterAuthorizedRoute, enterUnauthorizedRoute, updateRouteDetails } from '../../Action/RouterAction';
import { createReducer } from 'typesafe-actions';
const initialState = {
    routeType: null,
    location: undefined,
    params: undefined
};
const Router = createReducer(initialState)
    .handleAction(enterAuthorizedRoute, (state) => (Object.assign(Object.assign({}, state), { routeType: 'authorized' })))
    .handleAction(enterUnauthorizedRoute, (state) => (Object.assign(Object.assign({}, state), { routeType: 'unauthorized' })))
    .handleAction(updateRouteDetails, (state, { payload: { location, params } }) => (Object.assign(Object.assign({}, state), { location, params })));
export default Router;
//# sourceMappingURL=RouterReducer.js.map