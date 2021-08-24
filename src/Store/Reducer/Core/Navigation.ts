import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export type State = {
  navigationOpen: boolean;
};

const initialState: State = {
  navigationOpen: false,
};

const Navigation = createReducer<State, ActionType>(initialState)
  .handleAction(Action.openNavigation, state => ({
    ...state,
    navigationOpen: true,
  }))
  .handleAction(Action.closeNavigation, state => ({
    ...state,
    navigationOpen: false,
  }));

export default Navigation;
