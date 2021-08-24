import { combineEpics } from 'redux-observable';
import App from './App';
import Configuration from './Configuration';
import Language from './Language';
import Login from './Login';
import Locale from './Locale';
import Session from './Session';
import System from './System';
import WebSocket from './WebSocket';
import Notification from './Notification';
import { Epic } from 'Types/Redux';

export const wrap = (
  epic: Epic,
  wrapper: (action$: ReturnType<Epic>) => ReturnType<Epic>,
): Epic => (action$, state$, dependencies) =>
  wrapper(epic(action$, state$, dependencies));

const Core = combineEpics(
  App,
  Session,
  System,
  Login,
  Locale,
  Configuration,
  WebSocket,
  Language,
  Notification,
);

export default Core;
