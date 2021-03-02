import { combineEpics } from 'redux-observable';
import setInitialLanguageEpic from './setInitialLanguageEpic';
import setLanguageEpic from './setLanguageEpic';

export default combineEpics(
  setInitialLanguageEpic,
  setLanguageEpic
)
