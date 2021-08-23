import { createAction } from 'typesafe-actions';
import * as Country from 'Types/Country';

export const setLocale = (
  createAction('locale/SET_LOCALE')<{
    locale: Country.Locale
  }>()
);
