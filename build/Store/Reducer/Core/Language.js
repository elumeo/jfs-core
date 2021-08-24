import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
const initialState = {
    language: null,
    messages: null,
};
const Language = createReducer(initialState)
    .handleAction(Action.changeLanguageAction, (state, action) => (Object.assign(Object.assign({}, state), { language: action.payload })))
    .handleAction(Action.initializeApp, (state, { payload: { translations } }) => (Object.assign(Object.assign({}, state), { messages: translations })));
export default Language;
