import {
  changeLanguageAction
} from '../action/SettingsAction';
import { createReducer, PayloadAction } from "typesafe-actions";

export interface ISettingsReducerState {
  language?: string | null;
}

const initialState: ISettingsReducerState = {
  language: null,
};

// noinspection JSUnusedGlobalSymbols,TypeScriptValidateJSTypes
export const settingsReducer = createReducer(initialState)
  .handleAction(changeLanguageAction, (state: ISettingsReducerState, action: PayloadAction<string, string>): ISettingsReducerState => (
    { ...state, language: action.payload }
  ))
;
