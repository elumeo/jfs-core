import { createReducer, PayloadAction } from 'typesafe-actions';
import {
  checkLogin, loggedIn, loginFailed, updateCredentials, IUpdateCredentialsPayload
} from '../action/LoginAction';
import { unauthorizeSession } from '../action/SessionAction';

export interface ILoginReducerState {
  username: string;
  password: string;
  isCheckingLogin: boolean;
}

export const initialState: ILoginReducerState = {
  username: '',
  password: '',
  isCheckingLogin: false
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
    [loggedIn, loginFailed],
    (state: ILoginReducerState): ILoginReducerState => ({
      ...state,
      isCheckingLogin: false
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
    unauthorizeSession,
    () => ({ ...initialState })
  )
