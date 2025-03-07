import { combineReducers } from 'redux';
// import { connectRouter, RouterState } from 'connected-react-router'
import App, { State as AppState } from './App';
import Configuration, { State as ConfigurationState } from './Configuration';
import Language, { State as LanguageState } from './Language';
import Logout, { State as LogoutState } from './Logout';
import Debug, { State as DebugState } from './Debug';
import Navigation, { State as NavigationState } from './Navigation';
import Notification, { State as NotificationState } from './Notification';
import Router, { State as RouterState } from './Router';
import Session, { State as SessionState } from './Session';
import Settings, { State as SettingsState } from './Settings';
import System, { State as SystemState } from './System';
import Toast, { State as ToastState } from './Toast';
import Login, { State as LoginState } from './Login';
import Locale, { State as LocaleState } from './Locale';
import WebSocket, { State as WebSocketState } from './WebSocket';
import LocalStorage, { State as LocalStorageState } from './LocalStorage.reducer';
import * as Type from 'Types/Configuration';

export type State = {
  App?: AppState;
  Language?: LanguageState;
  Login?: LoginState;
  Logout?: LogoutState;
  Navigation?: NavigationState;
  Notification?: NotificationState;
  Debug?: DebugState;
  Router?: RouterState;
  Session?: SessionState;
  Settings?: SettingsState;
  System?: SystemState;
  Toast?: ToastState;
  WebSocket?: WebSocketState;
  Configuration?: ConfigurationState<Type.Configuration>;
  Locale?: LocaleState;
  LocalStorage?: LocalStorageState;
};

const Core = combineReducers<State>({
  App,
  Configuration,
  Debug,
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
  WebSocket,
  Locale,
  LocalStorage,
});

export default Core;
