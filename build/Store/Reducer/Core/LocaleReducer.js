import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
export const initialState = {
    locale: 'en-GB'
};
const Locale = createReducer(initialState)
    .handleAction(Action.setLocale, (state, action) => (Object.assign(Object.assign({}, state), { locale: action.payload.locale })));
export default Locale;
//# sourceMappingURL=LocaleReducer.js.map