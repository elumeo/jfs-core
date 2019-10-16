import { combineReducers } from 'redux';

import { routerReducer as reactRouterReducer } from 'react-router-redux';
import { baseReducer } from './BaseReducer';
import { sessionReducer } from './SessionReducer';
import { systemReducer } from './SystemReducer';
import { settingsReducer } from './SettingsReducer';
import { configReducer } from './ConfigReducer';
import { navigationReducer } from './NavigationReducer';
import { logoutReducer } from './LogoutReducer';
import { routerReducer } from './RouterReducer';

export default reducers => combineReducers({
  baseReducer,
  sessionReducer,
  systemReducer,
  settingsReducer,
  configReducer,
  navigationReducer,
  reactRouterReducer,
  logoutReducer,
  routerReducer,
  ...reducers
});
