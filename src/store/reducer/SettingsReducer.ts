import { closeSettings, openSettings } from '../action/SettingsAction';
import { createReducer } from 'typesafe-actions';

export interface ISettingsReducerState {
  settingsOpen: boolean;
}

const initialState = {
  settingsOpen: false
};

export const settingsReducer = createReducer(initialState)
  .handleAction(openSettings, (state) => ({
    ...state,
    settingsOpen: true
  }))
  .handleAction(closeSettings, (state) => ({
    ...state,
    settingsOpen: false
  }));
