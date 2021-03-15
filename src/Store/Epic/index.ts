import AppEpic from './AppEpic';
import SessionEpic from './SessionEpic';
import SystemEpic from './SystemEpic';
import LoginEpic from './LoginEpic';
import ConfigurationEpic from './ConfigEpic';
// import NotificationEpic from './NotificationEpic';
import WebSocketEpic from './WebSocketEpic';
import LanguageEpic from './LanguageEpic';
import { combineEpics } from 'redux-observable';
import { Epic } from 'Types/Redux';
import * as Rx from 'rxjs/operators';

const Core = combineEpics(
  AppEpic,
  SessionEpic,
  SystemEpic,
  LoginEpic,
  ConfigurationEpic,
  // NotificationEpic,
  WebSocketEpic,
  LanguageEpic
);

// const handleErrors = (combined: Epic): Epic => (
//   action$,
//   store$,
//   dependencies
// ) => (
//   combined(action$, store$, dependencies).pipe(
//     Rx.catchError((error, source) => {
//       if (error?.response?.status === 401) {
//
//       }
//       console.error(error);
//       return source;
//     })
//   )
// );

export default Core;
