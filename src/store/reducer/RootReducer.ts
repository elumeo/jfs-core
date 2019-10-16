import * as Bottle from 'bottlejs';

import { RouterState } from 'react-router-redux';
import { IBaseReducerState, } from './BaseReducer';
import { ISessionReducerState } from './SessionReducer';
import { ISystemReducerState } from './SystemReducer';
import { ISettingsReducerState } from './SettingsReducer';
import { IConfigReducerState } from './ConfigReducer';
import { INavigationReducerState } from './NavigationReducer';
import { ILogoutReducerState } from './LogoutReducer';
import { IRouterReducerState } from './RouterReducer';

interface IRootReducer extends Bottle.IContainer {
  baseReducer?: IBaseReducerState;
  sessionReducer?: ISessionReducerState;
  reactRouterReducer?: RouterState;
  systemReducer?: ISystemReducerState;
  settingsReducer?: ISettingsReducerState;
  configReducer?: IConfigReducerState;
  navigationReducer?: INavigationReducerState;
  logoutReducer?: ILogoutReducerState;
  routerReducer?: IRouterReducerState;
}

export default IRootReducer;
