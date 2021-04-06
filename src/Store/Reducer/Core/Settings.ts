import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
import { ActionType } from 'Types/Redux';

export type State = {
  settingsOpen: boolean;
}

const initialState: State = {
  settingsOpen: false
};

const Settings = createReducer<State, ActionType>(initialState)
  .handleAction(Action.openSettings, state => ({
    ...state,
    settingsOpen: true
  }))
  .handleAction(Action.closeSettings, state => ({
    ...state,
    settingsOpen: false
  }));

export default Settings;
