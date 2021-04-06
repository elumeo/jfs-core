import * as Action from 'Store/Action';
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
  .handleAction(Action.openLogout, (state: State) => ({
    ...state,
    logoutOpen: true
  }))
  .handleAction(Action.closeLogout, (state: State) => ({
    ...state,
    logoutOpen: false
  }))
  .handleAction(
    Action.logout, state => ({
      ...state,
      logoutPending: true
    })
  )
  .handleAction(
    Action.logoutFinished, state => ({
      ...state,
      logoutPending: false
    })
  )
;

export default Logout;
