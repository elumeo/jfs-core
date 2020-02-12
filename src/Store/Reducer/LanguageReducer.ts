import {
  changeLanguageAction
} from '../Action/LanguageAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { IInitializeAppPayload, initializeApp } from '../Action/AppAction';

import Translations, { ITranslations } from '../../Base/Translations';
import coreTranslations from '../../Translations.json';
import Shared from '../../Shared';

export interface ILanguageReducerState {
  language: string;
  messages: ITranslations;
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
      {payload: {translations: appTranslations}}: PayloadAction<string, IInitializeAppPayload>
    ): ILanguageReducerState => ({
      ...state,
      messages: Translations.merge(
        coreTranslations as unknown as ITranslations,
        Shared.translations,
        appTranslations
      )
    })
  );
