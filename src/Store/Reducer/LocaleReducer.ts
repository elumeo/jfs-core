import { createReducer, PayloadAction } from 'typesafe-actions';
import { setLocale, ISetLocalePayload } from '../Action/LocaleAction';

export interface ILocaleReducerState {
  locale: 'de-DE' | 'en-GB' | 'it-IT'
}

export const initialState: ILocaleReducerState = {
  locale: 'en-GB'
}

export const localeReducer = createReducer<ILocaleReducerState>(initialState)
  .handleAction(
    setLocale,
    (state, action: PayloadAction<string, ISetLocalePayload>) => ({
      ...state,
      locale: action.payload.locale
    })
  );
