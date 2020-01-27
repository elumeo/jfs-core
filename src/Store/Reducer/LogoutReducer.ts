import { openLogout, closeLogout, logoutFinished } from '../Action/LogoutAction';
import { logout } from '../Action/SessionAction';
import { createReducer } from 'typesafe-actions';

export interface ILogoutReducerState {
  logoutOpen: boolean;
  logoutPending: boolean;
}

const initialState: ILogoutReducerState = {
  logoutOpen: false,
  logoutPending: false
};

export const logoutReducer = createReducer(initialState)
  .handleAction(openLogout, (state: ILogoutReducerState) => ({
    ...state,
    logoutOpen: true
  }))
  .handleAction(closeLogout, (state: ILogoutReducerState) => ({
    ...state,
    logoutOpen: false
  }))
  .handleAction(
    logout, state => ({
      ...state,
      logoutPending: true
    })
  )
  .handleAction(
    logoutFinished, state => ({
      ...state,
      logoutPending: false
    })
  )
;
