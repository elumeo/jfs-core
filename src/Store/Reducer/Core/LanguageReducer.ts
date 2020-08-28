import { createReducer, PayloadAction } from 'typesafe-actions';
import { changeLanguageAction } from 'Action/LanguageAction';
import { initializeApp } from 'Action/AppAction';
import Messages from 'Utilities/Format/Translations/Messages';
import coreTranslations from 'Setup/Translations.json';
import Shared from '../../../Shared';

namespace Language {
  export type State = {
    language: string;
    messages: Messages.LanguageMap;
  };
}

const initialState: Language.State = {
  language: null,
  messages: null
};

const Language = createReducer(initialState)
  .handleAction(
    changeLanguageAction,
    (
      state: Language.State,
      action: PayloadAction<string, string>
    ): Language.State => (
      {...state, language: action.payload}
    ))
  .handleAction(
    initializeApp,
    (
      state: Language.State,
      {payload: {translations: appTranslations}}: PayloadAction<string, initializeApp.Payload>
    ): Language.State => ({
      ...state,
      messages: Messages.merge(
        coreTranslations as unknown as Messages.LanguageMap,
        Shared.translations,
        appTranslations
      )
    })
  );

export default Language;
