import { openLogout, closeLogout, logoutFinished } from 'Action/LogoutAction';
import { logout } from 'Action/SessionAction';
import { createReducer } from 'typesafe-actions';
import { ActionType } from 'Types/Redux';

export type State = {
  logoutOpen: boolean;
  logoutPending: boolean;
}

const initialState: State = {
  logoutOpen: false,
  logoutPending: false
};

const Logout = createReducer<State, ActionType>(initialState)
  .handleAction(openLogout, (state: State) => ({
    ...state,
    logoutOpen: true
  }))
  .handleAction(closeLogout, (state: State) => ({
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

export default Logout;
