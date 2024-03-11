import { combineEpics } from 'redux-observable';
import commitLogin from './commitLogin';
import getLoginPublicKey from './getLoginPublicKey';
import robotLoginRefresh from './robotLoginRefresh';

export default combineEpics(robotLoginRefresh, commitLogin, getLoginPublicKey);
