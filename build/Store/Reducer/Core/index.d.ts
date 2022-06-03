import { State as AppState } from './App';
import { State as ConfigurationState } from './Configuration';
import { State as LanguageState } from './Language';
import { State as LogoutState } from './Logout';
import { State as DebugState } from './Debug';
import { State as NavigationState } from './Navigation';
import { State as NotificationState } from './Notification';
import { State as RouterState } from './Router';
import { State as SessionState } from './Session';
import { State as SettingsState } from './Settings';
import { State as SystemState } from './System';
import { State as ToastState } from './Toast';
import { State as LoginState } from './Login';
import { State as LocaleState } from './Locale';
import { State as WebSocketState } from './WebSocket';
import * as Type from '../../../Types/Configuration';
export declare type State = {
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
};
declare const Core: import("redux").Reducer<import("redux").CombinedState<State>, import("redux").AnyAction>;
export default Core;
