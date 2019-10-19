import { closeDialog, openDialog } from '../action/SettingsAction';
import { createReducer } from "typesafe-actions";

export interface ISettingsReducerState {
  open: boolean;
}

const initialState = {
  open: false
};

export const settingsReducer = createReducer(initialState)
  .handleAction(openDialog, (state, action) => ({
    ...state,
    open: true
  }))
  .handleAction(closeDialog, (state, action) => ({
    ...state,
    open: false
  }));
