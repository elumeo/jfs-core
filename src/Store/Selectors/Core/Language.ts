import { createSelector } from 'reselect';
import getCoreStateSelector from '..';


const languageSelector = core => core.Language
export const getLanguageStateSelector = createSelector(getCoreStateSelector, languageSelector )