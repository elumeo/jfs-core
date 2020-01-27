import { createReducer, PayloadAction } from 'typesafe-actions';
import {
  checkLogin, loggedIn, loginFailed, updateCredentials, IUpdateCredentialsPayload
} from '../Action/LoginAction';
import { unauthorizeSession } from '../Action/SessionAction';

export interface ILoginReducerState {
  username: string;
  password: string;
  isCheckingLogin: boolean;
  failedLogins: number;
}

export const initialState: ILoginReducerState = {
  username: '',
  password: '',
  isCheckingLogin: false,
  failedLogins: 0
}

export const loginReducer = createReducer<ILoginReducerState>(initialState)
  .handleAction(
    checkLogin,
    (state: ILoginReducerState): ILoginReducerState => ({
      ...state,
      isCheckingLogin: true
    })
  )
  .handleAction(
    updateCredentials,
    (
      state: ILoginReducerState,
      action: PayloadAction<string, IUpdateCredentialsPayload>
    ): ILoginReducerState => ({
      ...state,
      username: action.payload.username,
      password: action.payload.password
    })
  )
  .handleAction(
    loggedIn,
    (state: ILoginReducerState) => ({
      ...state,
      failedLogins: 0,
      isCheckingLogin: false
    })
  )
  .handleAction(
    loginFailed,
    (state: ILoginReducerState) => ({
      ...state,
      failedLogins: state.failedLogins + 1,
      isCheckingLogin: false
    })
  )
