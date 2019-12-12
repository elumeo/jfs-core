import { openLogout, closeLogout, beforeLogoutHookFinished, logoutFinished } from '../action/LogoutAction';
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
    beforeLogoutHookFinished, state => ({
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
