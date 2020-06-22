import { enterAuthorizedRoute, enterUnauthorizedRoute } from '../../Action/RouterAction';
import { createReducer } from 'typesafe-actions';
const initialState = {
    routeType: null
};
const Router = createReducer(initialState)
    .handleAction(enterAuthorizedRoute, (state) => (Object.assign(Object.assign({}, state), { routeType: 'authorized' })))
    .handleAction(enterUnauthorizedRoute, (state) => (Object.assign(Object.assign({}, state), { routeType: 'unauthorized' })));
export default Router;
//# sourceMappingURL=RouterReducer.js.map