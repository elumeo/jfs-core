import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as Country from 'Types/Country';
import { ActionType } from 'Types/Redux';

export type State = {
  locale: Country.Locale;
};

export const initialState: State = {
  locale: 'en-GB',
};

const Locale = createReducer<State, ActionType>(initialState).handleAction(
  Action.setLocale,
  (state, action) => ({
    ...state,
    locale: action.payload.locale,
  }),
);

export default Locale;
