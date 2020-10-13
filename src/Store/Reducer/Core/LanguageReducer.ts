import { createReducer, PayloadAction } from 'typesafe-actions';
import * as Action from 'Store/Action';
import Messages from 'Utilities/Format/Translations/Messages';
import coreTranslations from 'Setup/Translations.json';
import { Language } from 'Types/Language';
import Shared from '../../../Shared';

namespace Language {
  export type State = {
    language: Language;
    messages: Messages.LanguageMap;
  };
}

const initialState: Language.State = {
  language: null,
  messages: null
};

const Language = createReducer(initialState)
  .handleAction(
    Action.changeLanguageAction,
    (
      state: Language.State,
      action: PayloadAction<string, Language>
    ): Language.State => ({
      ...state,
      language: action.payload
    })
  )
  .handleAction(
    Action.initializeApp,
    (
      state: Language.State,
      {payload: {translations: appTranslations}}: PayloadAction<string, Action.initializeApp.Payload>
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
