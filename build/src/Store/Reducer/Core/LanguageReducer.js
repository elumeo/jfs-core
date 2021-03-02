import { createReducer } from 'typesafe-actions';
import * as Action from '../../../../Store/Action';
const initialState = {
    language: null,
    messages: null
};
const Language = createReducer(initialState)
    .handleAction(Action.changeLanguageAction, (state, action) => (Object.assign(Object.assign({}, state), { language: action.payload })))
    .handleAction(Action.initializeApp, (state, { payload: { translations } }) => (Object.assign(Object.assign({}, state), { messages: // _.merge(
    translations //,// as unknown as Messages.LanguageMap,
 })));
export default Language;
//# sourceMappingURL=LanguageReducer.js.map