import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
const initialState = {
    navigationOpen: false
};
const Navigation = createReducer(initialState)
    .handleAction(Action.openNavigation, state => (Object.assign(Object.assign({}, state), { navigationOpen: true })))
    .handleAction(Action.closeNavigation, state => (Object.assign(Object.assign({}, state), { navigationOpen: false })));
export default Navigation;
