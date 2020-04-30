import { changeLanguageAction } from '../Action/LanguageAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { IInitializeAppPayload, initializeApp } from '../Action/AppAction';
import Messages from '../../Utilities/Format/Translations/Messages';
import coreTranslations from '../../Translations.json';
import Shared from '../../Shared';

export interface ILanguageReducerState {
  language: string;
  messages: Messages.LanguageMap;
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
      messages: Messages.merge(
        coreTranslations as unknown as Messages.LanguageMap,
        Shared.translations,
        appTranslations
      )
    })
  );
