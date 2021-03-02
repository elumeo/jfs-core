import AppEpic from './AppEpic';
import SessionEpic from './SessionEpic';
import SystemEpic from './SystemEpic';
import LoginEpic from './LoginEpic';
import ConfigurationEpic from './ConfigEpic';
import NotificationEpic from './NotificationEpic';
import WebSocketEpic from './WebSocketEpic';
import LanguageEpic from './LanguageEpic';
import { combineEpics } from 'redux-observable';
export default combineEpics(AppEpic, SessionEpic, SystemEpic, LoginEpic, ConfigurationEpic, NotificationEpic, WebSocketEpic, LanguageEpic);
//# sourceMappingURL=index.js.map