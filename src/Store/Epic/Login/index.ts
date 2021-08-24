import { combineEpics } from 'redux-observable';
import commitLogin from './commitLogin';
import robotLoginRefresh from './robotLoginRefresh';

export default combineEpics(robotLoginRefresh, commitLogin);
