import { createReducer } from 'typesafe-actions';
import { checkLogin, loggedIn, loginFailed, updateCredentials } from '../../Action/LoginAction';
const initialState = {
    username: '',
    password: '',
    isCheckingLogin: false,
    failedLogins: 0
};
const Login = createReducer(initialState)
    .handleAction(checkLogin, (state) => (Object.assign(Object.assign({}, state), { isCheckingLogin: true })))
    .handleAction(updateCredentials, (state, action) => (Object.assign(Object.assign({}, state), { username: action.payload.username, password: action.payload.password })))
    .handleAction(loggedIn, (state) => (Object.assign(Object.assign({}, state), { failedLogins: 0, isCheckingLogin: false, username: '', password: '' })))
    .handleAction(loginFailed, (state) => (Object.assign(Object.assign({}, state), { failedLogins: state.failedLogins + 1, isCheckingLogin: false })));
export default Login;
//# sourceMappingURL=LoginReducer.js.map