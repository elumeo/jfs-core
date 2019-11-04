import * as Bottle from 'bottlejs';

import { IConfigReducerState } from './ConfigReducer';
import { ILanguageReducerState, } from './LanguageReducer';
import { ILogoutReducerState } from './LogoutReducer';
import { INavigationReducerState } from './NavigationReducer';
import { INotificationReducerState } from "./NotificationReducer";
import { IRouterReducerState } from './RouterReducer';
import { ISessionReducerState } from './SessionReducer';
import { ISettingsReducerState } from './SettingsReducer';
import { ISystemReducerState } from './SystemReducer';
import { RouterState } from 'react-router-redux';
import { ISplitViewReducerState } from "./SplitViewReducer";

interface IRootReducer extends Bottle.IContainer {
  configReducer?: IConfigReducerState;
  languageReducer?: ILanguageReducerState;
  logoutReducer?: ILogoutReducerState;
  navigationReducer?: INavigationReducerState;
  notificationReducer?: INotificationReducerState;
  reactRouterReducer?: RouterState;
  routerReducer?: IRouterReducerState;
  sessionReducer?: ISessionReducerState;
  settingsReducer?: ISettingsReducerState;
  splitViewReducer?: ISplitViewReducerState;
  systemReducer?: ISystemReducerState;
}

export default IRootReducer;
