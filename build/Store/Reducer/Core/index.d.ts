import { RouterState } from 'react-router-redux';
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
import IConfig from '../../../Types/Configuration';
declare namespace Core {
    type State = {
        App?: App.State;
        Language?: Language.State;
        Login?: Login.State;
        Logout?: Logout.State;
        Navigation?: Navigation.State;
        Notification?: Notification.State;
        reactRouterReducer?: RouterState;
        Router?: Router.State;
        Session?: Session.State;
        Settings?: Settings.State;
        SplitView?: SplitView.State;
        System?: System.State;
        Toast?: Toast.State;
        WebSocketConnection?: WebSocketConnection.State;
        Configuration?: Configuration.State<IConfig>;
    };
}
declare const Core: import("redux").Reducer<import("redux").CombinedState<Core.State>, import("redux").AnyAction>;
export default Core;
