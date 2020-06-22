import { createStandardAction } from 'typesafe-actions';

const featureName = 'language';

export namespace changeLanguageAction {
  export type Payload = string;
}

export const changeLanguageAction = (
  createStandardAction(featureName + '/CHANGE')<changeLanguageAction.Payload>()
);
export const initializeLanguage = (
  createStandardAction(`${featureName}/INITIALIZE`)()
);
