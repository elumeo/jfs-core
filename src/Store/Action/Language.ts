import { createAction, PayloadAction } from 'typesafe-actions';
import { Language } from 'Types/Language';

export namespace changeLanguageAction {
  export type Payload = Language;

  export type Type = PayloadAction<string, Payload>;
}

export const changeLanguageAction = (
  createAction('language/CHANGE')<changeLanguageAction.Payload>()
);
export const initializeLanguage = (
  createAction(`language/INITIALIZE`)()
);
