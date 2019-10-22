import { combineReducers } from 'redux';

import { routerReducer as reactRouterReducer } from 'react-router-redux';
import { configReducer } from './ConfigReducer';
import { languageReducer } from './LanguageReducer';
import { logoutReducer } from './LogoutReducer';
import { navigationReducer } from './NavigationReducer';
import { notificationReducer } from './NotificationReducer';
import { routerReducer } from './RouterReducer';
import { sessionReducer } from './SessionReducer';
import { settingsReducer } from './SettingsReducer';
import { splitViewReducer } from './SplitViewReducer';
import { systemReducer } from './SystemReducer';
import { toastReducer } from './ToastReducer';
import { webSocketReducer } from './WebSocketReducer';

// noinspection JSUnusedGlobalSymbols
export default reducers => combineReducers({
  reactRouterReducer,
  configReducer,
  webSocketReducer,
  languageReducer,
  logoutReducer,
  navigationReducer,
  notificationReducer,
  routerReducer,
  sessionReducer,
  settingsReducer,
  splitViewReducer,
  systemReducer,
  toastReducer,
  ...reducers
});
