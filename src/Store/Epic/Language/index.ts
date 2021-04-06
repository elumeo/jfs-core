import { combineEpics } from 'redux-observable';
import setInitialLanguage from './setInitialLanguage';
import setLanguage from './setLanguage';

export default combineEpics(
  setInitialLanguage,
  setLanguage
);
