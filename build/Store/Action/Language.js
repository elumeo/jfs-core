import { createAction } from 'typesafe-actions';
export const changeLanguageAction = createAction('language/CHANGE')();
export const initializeLanguage = createAction(`language/INITIALIZE`)();
