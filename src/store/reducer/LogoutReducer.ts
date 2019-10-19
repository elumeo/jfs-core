import { openLogout, closeLogout } from '../action/LogoutAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface ILogoutReducerState {
  logoutOpen: boolean;
}

const initialState = {
  logoutOpen: false
}

export const logoutReducer = createReducer(initialState)
  .handleAction(openLogout, (state: ILogoutReducerState) => ({
    ...state,
    logoutOpen: true
  }))
  .handleAction(closeLogout, (state: ILogoutReducerState) => ({
    ...state,
    logoutOpen: false
  }));
