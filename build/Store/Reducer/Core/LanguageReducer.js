import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
import Messages from '../../../Utilities/Format/Translations/Messages';
import coreTranslations from '../../../Setup/Translations.json';
import Shared from '../../../Shared';
const initialState = {
    language: null,
    messages: null
};
const Language = createReducer(initialState)
    .handleAction(Action.changeLanguageAction, (state, action) => (Object.assign(Object.assign({}, state), { language: action.payload })))
    .handleAction(Action.initializeApp, (state, { payload: { translations: appTranslations } }) => (Object.assign(Object.assign({}, state), { messages: Messages.merge(coreTranslations, Shared.translations, appTranslations) })));
export default Language;
//# sourceMappingURL=LanguageReducer.js.map