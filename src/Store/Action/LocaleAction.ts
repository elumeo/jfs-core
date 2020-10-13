import { createStandardAction } from 'typesafe-actions';

export interface ISetLocalePayload {
  locale: 'de-DE' | 'en-GB' | 'it-IT'
}

export const setLocale = createStandardAction(
  'locale/SET_LOCALE'
)<ISetLocalePayload>();
