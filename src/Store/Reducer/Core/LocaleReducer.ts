import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as Country from 'Types/Country';

namespace Locale {
  export type State =  {
    locale: Country.Locale;
  }
}

export const initialState: Locale.State = {
  locale: 'en-GB'
}

const Locale = createReducer<Locale.State>(initialState)
  .handleAction(
    Action.setLocale,
    (state, action: Action.setLocale.Type) => ({
      ...state,
      locale: action.payload.locale
    })
  );

export default Locale;
