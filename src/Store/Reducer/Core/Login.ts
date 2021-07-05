import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export type State = {
  isCheckingLogin: boolean;
  failedLogins: number;
}

const initialState: State = {
  isCheckingLogin: false,
  failedLogins: 0
};

const Login = createReducer<State, ActionType>(initialState)
  .handleAction(
    Action.checkLogin,
    state => ({
      ...state,
      isCheckingLogin: true
    })
  )
  .handleAction(
    Action.loginFailed,
    state => ({
      ...state,
      failedLogins: state.failedLogins + 1,
      isCheckingLogin: false
    })
  )
  .handleAction(
    Action.loggedIn,
    state => ({
      ...state,
      failedLogins: 0,
      isCheckingLogin: false,
      username: '',
      password: ''
    })
  );


export default Login;
