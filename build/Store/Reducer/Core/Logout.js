import * as Action from '../../Action';
import { createReducer } from 'typesafe-actions';
const initialState = {
    logoutOpen: false,
    logoutPending: false
};
const Logout = createReducer(initialState)
    .handleAction(Action.openLogout, (state) => (Object.assign(Object.assign({}, state), { logoutOpen: true })))
    .handleAction(Action.closeLogout, (state) => (Object.assign(Object.assign({}, state), { logoutOpen: false })))
    .handleAction(Action.logout, state => (Object.assign(Object.assign({}, state), { logoutPending: true })))
    .handleAction(Action.logoutFinished, state => (Object.assign(Object.assign({}, state), { logoutPending: false })));
export default Logout;
//# sourceMappingURL=Logout.js.map