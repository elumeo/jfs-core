import { closeSettings, openSettings } from 'Action/SettingsAction';
import { createReducer } from 'typesafe-actions';
import { ActionType } from 'Types/Redux';

export type State = {
  settingsOpen: boolean;
}

const initialState: State = {
  settingsOpen: false
};

const Settings = createReducer<State, ActionType>(initialState)
  .handleAction(openSettings, state => ({
    ...state,
    settingsOpen: true
  }))
  .handleAction(closeSettings, state => ({
    ...state,
    settingsOpen: false
  }));

export default Settings;
