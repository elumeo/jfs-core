import { createAction } from 'typesafe-actions';
import { Language } from 'Types/Language';

export const changeLanguageAction = createAction('language/CHANGE')<Language>();
export const initializeLanguage = createAction(`language/INITIALIZE`)();
