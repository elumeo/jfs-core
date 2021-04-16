import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
export const initialState = {
    locale: 'en-GB'
};
const Locale = createReducer(initialState)
    .handleAction(Action.setLocale, (state, action) => (Object.assign(Object.assign({}, state), { locale: action.payload.locale })));
export default Locale;
