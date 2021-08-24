import { State } from 'Store/Reducer/Global';
import { createSelector } from 'reselect';

export const translationLanguage = createSelector(
  (state: State) => state.Core.Language,
  state => state.language,
);

export const translations = createSelector(
  (state: State) => state.Core.Language,
  state => state.messages,
);
