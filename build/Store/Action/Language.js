import { createStandardAction } from 'typesafe-actions';
export const changeLanguageAction = (createStandardAction('language/CHANGE')());
export const initializeLanguage = (createStandardAction(`language/INITIALIZE`)());
