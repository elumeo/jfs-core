import { combineReducers } from 'redux';
// import { connectRouter, RouterState } from 'connected-react-router'
import App from './App';
import Configuration from './Configuration';
import Language from './Language';
import Logout from './Logout';
import Navigation from './Navigation';
import Notification from './Notification';
import Router from './Router';
import Session from './Session';
import Settings from './Settings';
import System from './System';
import Toast from './Toast';
import Login from './Login';
import Locale from './Locale';
import WebSocket from './WebSocket';
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
    System,
    Toast,
    WebSocket,
    Locale
});
export default Core;
//# sourceMappingURL=index.js.map