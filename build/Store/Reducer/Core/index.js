import { combineReducers } from 'redux';
// import { connectRouter, RouterState } from 'connected-react-router'
import Configuration from './ConfigReducer';
import Language from './LanguageReducer';
import Logout from './LogoutReducer';
import Navigation from './NavigationReducer';
import Notification from './NotificationReducer';
import Router from './RouterReducer';
import Session from './SessionReducer';
import Settings from './SettingsReducer';
import SplitView from './SplitViewReducer';
import System from './SystemReducer';
import Toast from './ToastReducer';
import WebSocketConnection from './WebSocketConnectionReducer';
import App from './AppReducer';
import Login from './LoginReducer';
import Locale from './LocaleReducer';
const Core = combineReducers({
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
    SplitView,
    System,
    Toast,
    WebSocketConnection,
    Locale
});
export default Core;
//# sourceMappingURL=index.js.map