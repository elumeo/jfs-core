import { createAction, PayloadAction } from 'typesafe-actions';
import * as Country from 'Types/Country';

export namespace setLocale {
  export type Payload = {
    locale: Country.Locale
  }

  export type Type = PayloadAction<string, Payload>;
}

export const setLocale = (
  createAction('locale/SET_LOCALE')<setLocale.Payload>()
);
