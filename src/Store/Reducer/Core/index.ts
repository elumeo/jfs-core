import { combineReducers } from 'redux';
// import { connectRouter, RouterState } from 'connected-react-router'
import Configuration, { State as ConfigurationState } from './ConfigReducer';
import Language, { State as LanguageState } from './LanguageReducer';
import Logout, { State as LogoutState } from './LogoutReducer';
import Navigation, { State as NavigationState } from './NavigationReducer';
import Notification, { State as NotificationState } from './NotificationReducer';
import Router, { State as RouterState } from './RouterReducer';
import Session, { State as SessionState } from './SessionReducer';
import Settings, { State as SettingsState } from './SettingsReducer';
import System, { State as SystemState } from './SystemReducer';
import Toast, { State as ToastState } from './ToastReducer';
import WebSocketConnection, { State as WebSocketConnectionState } from './WebSocketConnectionReducer';
import App, { State as AppState } from './AppReducer';
import Login, { State as LoginState } from './LoginReducer';
import Locale, { State as LocaleState } from './LocaleReducer';
import IConfig from 'Types/Configuration';

export type State = {
  App?: AppState;
  Language?: LanguageState;
  Login?: LoginState;
  Logout?: LogoutState;
  Navigation?: NavigationState;
  Notification?: NotificationState;
  // router?: RouterState;
  Router?: RouterState;
  Session?: SessionState;
  Settings?: SettingsState;
  // SplitView?: SplitViewState;
  System?: SystemState;
  Toast?: ToastState;
  WebSocketConnection?: WebSocketConnectionState;
  Configuration?: ConfigurationState<IConfig>;
  Locale?: LocaleState;
}

const Core = combineReducers<State>({
  App,
  // router : connectRouter(history),
  Configuration,
  Language,
  Login,
  Logout,
  Navigation,
  Notification,
  Router,
  Session,
  Settings,
  System,
  Toast,
  WebSocketConnection,
  Locale
});

export default Core;
