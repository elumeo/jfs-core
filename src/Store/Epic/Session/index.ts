import { combineEpics } from 'redux-observable';
import load from './load';
import check from './check';
import logout from './logout';
import authorize from './authorize';
import unauthorize from './unauthorize';

export default combineEpics(
  logout,
  load,
  check,
  authorize,
  unauthorize,
);
