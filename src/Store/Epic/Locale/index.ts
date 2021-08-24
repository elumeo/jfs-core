import { combineEpics } from 'redux-observable';
import setLocaleByLanguage from './setLocaleByLanguage';
import bindSetLocaleToAction from './bindSetLocaleToAction';

export default combineEpics(setLocaleByLanguage, bindSetLocaleToAction);
