import {
  changeLanguageAction
} from '../action/LanguageAction';
import { createReducer, PayloadAction } from 'typesafe-actions';

export interface ILanguageReducerState {
  language?: string | null;
}

const initialState: ILanguageReducerState = {
  language: null,
};

export const languageReducer = createReducer(initialState)
  .handleAction(
    changeLanguageAction,
    (
      state: ILanguageReducerState,
      action: PayloadAction<string, string>
    ): ILanguageReducerState => (
    {...state, language: action.payload}
  ));
