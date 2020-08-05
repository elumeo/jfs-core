import { createReducer } from 'typesafe-actions';
import { changeLanguageAction } from '../../Action/LanguageAction';
import { initializeApp } from '../../Action/AppAction';
import Messages from '../../../Utilities/Format/Translations/Messages';
import coreTranslations from '../../../Setup/Translations.json';
import Shared from '../../../Shared';
const initialState = {
    language: null,
    messages: null
};
const Language = createReducer(initialState)
    .handleAction(changeLanguageAction, (state, action) => (Object.assign(Object.assign({}, state), { language: action.payload })))
    .handleAction(initializeApp, (state, { payload: { translations: appTranslations } }) => (Object.assign(Object.assign({}, state), { messages: Messages.merge(coreTranslations, Shared.translations, appTranslations) })));
export default Language;
//# sourceMappingURL=LanguageReducer.js.map