import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
const initialState = {
    isCheckingLogin: false,
    failedLogins: 0,
};
const Login = createReducer(initialState)
    .handleAction(Action.checkLogin, state => (Object.assign(Object.assign({}, state), { isCheckingLogin: true })))
    .handleAction(Action.loginFailed, state => (Object.assign(Object.assign({}, state), { failedLogins: state.failedLogins + 1, isCheckingLogin: false })))
    .handleAction(Action.loggedIn, state => (Object.assign(Object.assign({}, state), { failedLogins: 0, isCheckingLogin: false, username: '', password: '' })));
export default Login;
