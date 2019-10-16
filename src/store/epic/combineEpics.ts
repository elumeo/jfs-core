import { combineEpics } from 'redux-observable';

import {
  checkLoginEpic,
  logoutEpic,
  checkSessionEpic,
  checkUserRightsEpic,
  robotLoginEpic,
  autoSessionCheck,
} from './SessionEpic';

import { getRegionEpic } from './SystemEpic';

import { loadConfigEpic } from './ConfigEpic';

// -----------------------------------------------------------------------------

export default (...epics: any) => {
  return combineEpics(
    checkSessionEpic,
    checkLoginEpic,
    checkUserRightsEpic,
    logoutEpic,
    robotLoginEpic,
    getRegionEpic,
    loadConfigEpic,
    autoSessionCheck,
    ...epics
  );
}
