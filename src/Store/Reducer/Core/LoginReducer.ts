import { createReducer, PayloadAction } from 'typesafe-actions';
import {
  checkLogin, loggedIn, loginFailed, updateCredentials
} from '../../Action/LoginAction';

namespace Login {
  export type State = {
    username: string;
    password: string;
    isCheckingLogin: boolean;
    failedLogins: number;
  }
}

const initialState: Login.State = {
  username: '',
  password: '',
  isCheckingLogin: false,
  failedLogins: 0
};

const Login = createReducer<Login.State>(initialState)
  .handleAction(
    checkLogin,
    (state: Login.State): Login.State => ({
      ...state,
      isCheckingLogin: true
    })
  )
  .handleAction(
    updateCredentials,
    (
      state: Login.State,
      action: PayloadAction<string, updateCredentials.Payload>
    ): Login.State => ({
      ...state,
      username: action.payload.username,
      password: action.payload.password
    })
  )
  .handleAction(
    loggedIn,
    (state: Login.State) => ({
      ...state,
      failedLogins: 0,
      isCheckingLogin: false,
      username: '',
      password: ''
    })
  )
  .handleAction(
    loginFailed,
    (state: Login.State) => ({
      ...state,
      failedLogins: state.failedLogins + 1,
      isCheckingLogin: false
    })
  )

export default Login;
