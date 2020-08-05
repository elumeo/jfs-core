import { closeSettings, openSettings } from 'Action/SettingsAction';
import { createReducer } from 'typesafe-actions';

namespace Settings {
  export type State = {
    settingsOpen: boolean;
  }
}

const initialState: Settings.State = {
  settingsOpen: false
};

const Settings = createReducer<Settings.State>(initialState)
  .handleAction(openSettings, (state) => ({
    ...state,
    settingsOpen: true
  }))
  .handleAction(closeSettings, (state) => ({
    ...state,
    settingsOpen: false
  }));

export default Settings;
