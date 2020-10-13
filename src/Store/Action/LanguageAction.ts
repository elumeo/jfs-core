import { createStandardAction, PayloadAction } from 'typesafe-actions';
import { Language } from 'Types/Language';

const featureName = 'language';

export namespace changeLanguageAction {
  export type Payload = Language;

  export type Type = PayloadAction<string, Payload>;
}

export const changeLanguageAction = (
  createStandardAction(featureName + '/CHANGE')<changeLanguageAction.Payload>()
);
export const initializeLanguage = (
  createStandardAction(`${featureName}/INITIALIZE`)()
);
