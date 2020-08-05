import { openLogout, closeLogout, logoutFinished } from 'Action/LogoutAction';
import { logout } from 'Action/SessionAction';
import { createReducer } from 'typesafe-actions';

namespace Logout {
  export type State = {
    logoutOpen: boolean;
    logoutPending: boolean;
  }
}

const initialState: Logout.State = {
  logoutOpen: false,
  logoutPending: false
};

const Logout = createReducer<Logout.State>(initialState)
  .handleAction(openLogout, (state: Logout.State) => ({
    ...state,
    logoutOpen: true
  }))
  .handleAction(closeLogout, (state: Logout.State) => ({
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
