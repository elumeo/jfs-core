import { openLogout, closeLogout, logoutFinished } from '../../../../Store/Action/LogoutAction';
import { logout } from '../../../../Store/Action/SessionAction';
import { createReducer } from 'typesafe-actions';
const initialState = {
    logoutOpen: false,
    logoutPending: false
};
const Logout = createReducer(initialState)
    .handleAction(openLogout, (state) => (Object.assign(Object.assign({}, state), { logoutOpen: true })))
    .handleAction(closeLogout, (state) => (Object.assign(Object.assign({}, state), { logoutOpen: false })))
    .handleAction(logout, state => (Object.assign(Object.assign({}, state), { logoutPending: true })))
    .handleAction(logoutFinished, state => (Object.assign(Object.assign({}, state), { logoutPending: false })));
export default Logout;
//# sourceMappingURL=LogoutReducer.js.map