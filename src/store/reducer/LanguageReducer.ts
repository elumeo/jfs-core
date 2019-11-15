import {
  changeLanguageAction
} from '../action/LanguageAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { IInitializeAppPayload, initializeApp } from '../action/AppAction';

import mergeTranslations from '../../Translations';

export interface ILanguageReducerState {
  language: string;
  messages: { [language: string]: { [key: string]: string } };
}

const initialState: ILanguageReducerState = {
  language: null,
  messages: null
};

export const languageReducer = createReducer(initialState)
  .handleAction(
    changeLanguageAction,
    (
      state: ILanguageReducerState,
      action: PayloadAction<string, string>
    ): ILanguageReducerState => (
    {...state, language: action.payload}
  ))
  .handleAction(
    initializeApp,
    (
      state: ILanguageReducerState,
      action: PayloadAction<string, IInitializeAppPayload>
    ): ILanguageReducerState => ({
      ...state,
      messages: mergeTranslations(action.payload.translations)
    })
  );
