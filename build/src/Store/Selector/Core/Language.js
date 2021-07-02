import { createSelector } from 'reselect';
export const translationLanguage = createSelector((state) => state.Core.Language, state => state.language);
export const translations = createSelector((state) => state.Core.Language, state => state.messages);
