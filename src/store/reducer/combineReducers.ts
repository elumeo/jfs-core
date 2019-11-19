import { combineReducers } from 'redux';
import { routerReducer as reactRouterReducer, RouterState } from 'react-router-redux';

import { configReducer, IConfigReducerState } from './ConfigReducer';
import { languageReducer, ILanguageReducerState } from './LanguageReducer';
import { logoutReducer, ILogoutReducerState } from './LogoutReducer';
import { navigationReducer, INavigationReducerState } from './NavigationReducer';
import { notificationReducer, INotificationReducerState } from './NotificationReducer';
import { routerReducer, IRouterReducerState } from './RouterReducer';
import { sessionReducer, ISessionReducerState } from './SessionReducer';
import { settingsReducer, ISettingsReducerState } from './SettingsReducer';
import { splitViewReducer, ISplitViewReducerState } from './SplitViewReducer';
import { systemReducer, ISystemReducerState } from './SystemReducer';
import { toastReducer, IToastReducerState } from './ToastReducer';
import { webSocketReducer, IWebSocketReducerState } from './WebSocketReducer';
import { appReducer, IAppReducerState } from './AppReducer';
import { loginReducer, ILoginReducerState } from './LoginReducer';
import IConfig from '../../base/IConfig';

export interface IRootReducer<IConfig> {
  appReducer?: IAppReducerState;
  languageReducer?: ILanguageReducerState;
  loginReducer?: ILoginReducerState;
  logoutReducer?: ILogoutReducerState;
  navigationReducer?: INavigationReducerState;
  notificationReducer?: INotificationReducerState;
  reactRouterReducer?: RouterState;
  routerReducer?: IRouterReducerState;
  sessionReducer?: ISessionReducerState;
  settingsReducer?: ISettingsReducerState;
  splitViewReducer?: ISplitViewReducerState;
  systemReducer?: ISystemReducerState;
  toastReducer?: IToastReducerState;
  webSocketReducer?: IWebSocketReducerState;
  configReducer?: IConfigReducerState<IConfig>;
}

export interface ICoreRootReducer extends IRootReducer<IConfig> {

}

export default reducers => combineReducers({
  appReducer,
  reactRouterReducer,
  configReducer,
  languageReducer,
  loginReducer,
  logoutReducer,
  navigationReducer,
  notificationReducer,
  routerReducer,
  sessionReducer,
  settingsReducer,
  splitViewReducer,
  systemReducer,
  toastReducer,
  webSocketReducer,
  ...reducers
});
