import { createStandardAction, PayloadAction } from 'typesafe-actions';
import { Language } from 'Types/Language';

export namespace changeLanguageAction {
  export type Payload = Language;

  export type Type = PayloadAction<string, Payload>;
}

export const changeLanguageAction = (
  createStandardAction('language/CHANGE')<changeLanguageAction.Payload>()
);
export const initializeLanguage = (
  createStandardAction(`language/INITIALIZE`)()
);
