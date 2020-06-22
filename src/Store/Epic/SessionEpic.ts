import {Epic, StateObservable, combineEpics} from 'redux-observable'
import { catchError, concatMap, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { from, of, concat, EMPTY } from 'rxjs';
import { AxiosResponse } from 'axios';
import {
  authorizeSession,
  checkSession,
  loadSession,
  logout,
  unauthorizeSession
} from 'Action/SessionAction';
import { checkLogin } from 'Action/LoginAction';
import { addToastAction } from 'Action/ToastAction';
import { appInitialized } from 'Action/AppAction';
import JSCApi from 'Jsc/Api';
import Session from '../../Base/Session';
import { beforeLogoutHookFinished, logoutFinished, closeLogout } from 'Action/LogoutAction';
import Core from "../Reducer/Core";

const loadSessionEpic: Epic = (
  action$,
  store: StateObservable<{ Core: Core.State }>
) => (
  action$.pipe(
    filter(isActionOf(loadSession)),
    map(() => {
      const {
        RobotUsername: username,
        RobotPassword: password
      } = store.value.Core.Configuration.config;
      const { allowRobotLogin } = store.value.Core.App;
      return [allowRobotLogin, {  username, password }] as [
        boolean, { username: string; password: string; }
      ];
    }),
    switchMap(
      ([allowRobotLogin, {username, password}]) => of(
        Session.getToken() || allowRobotLogin && username && password
          ? (
            Session.getToken()
              ? checkSession()
              : checkLogin({username, password})
          )
          : unauthorizeSession()
      )
    )
  )
);

const checkSessionEpic: Epic = (
  action$,
  store: StateObservable<{ Core: Core.State }>
) => (
  action$.pipe(
    filter(isActionOf(checkSession)),
    concatMap(
      () => from(JSCApi.SessionClient.getCurrentSessionFrontend(
        store.value.Core.Configuration.config.AppName,
      )).pipe(
        switchMap(
          (response: AxiosResponse<JSCApi.DTO.Session.IFrontendSessionDTO>) => of(
            authorizeSession({frontendSessionDTO: response.data})
          )
        )
      )
    ),
    catchError((error) => {
      const toastableErrorIds: string[] = [
        'authorizationRequired', 'invalidSession'
      ];

      const isToastable = error && error.response && (
        toastableErrorIds.find(id => id === error.response.id)
      );

      const contentTranslationId = (
        isToastable
          ? (
            error.response.id === 'authorizationRequired'
              ? 'userRights.checkFailed'
              : 'session.expired'
          )
          : null
      );

      return of(
        ...(
          isToastable
            ? [addToastAction({contentTranslationId, isError: true})]
            : []
        ),
        unauthorizeSession()
      )
    })
  )
);

export const beforeLogoutHookEpic = handleLogoutHook => (
  action$,
  store: StateObservable<{ Core: Core.State }>
) => (
  action$.pipe(
    filter(isActionOf(logout)),
    concatMap(action => concat(
      handleLogoutHook(action, store),
      of(beforeLogoutHookFinished())
    ))
  )
);

const logoutEpic: Epic = (
  action$,
  store: StateObservable<{ Core: Core.State }>
) => (
  action$.pipe(
    filter(isActionOf(beforeLogoutHookFinished)),
    concatMap((action: PayloadAction<string, logout.Payload>) => {
      const session = (
        action.payload && action.payload.sessionDTO
          ? action.payload.sessionDTO
          : store.value.Core.Session.sessionDTO
      );
      if (session) {
        return from(JSCApi.SessionClient.logout(session)).pipe(
          switchMap(() => of(logoutFinished())),
          catchError((error) => {
            if (error && error.response && error.response.status === 401) {
              return of(logoutFinished());
            }
            throw error;
          })
        )
      } else {
        return of(logoutFinished());
      }
    })
  )
);

export const afterLogoutHookEpic = handleLogoutFinished => action$ => (
  action$.pipe(
    filter(isActionOf(logoutFinished)),
    concatMap(
      action => concat(
        handleLogoutFinished(action),
        of(closeLogout()),
        of(unauthorizeSession())
      )
    )
  )
)

const unauthorizeSessionEpic: Epic = (
  action$,
  store: StateObservable<{ Core: Core.State }>
) => (
  action$.pipe(
    filter(isActionOf(unauthorizeSession)),
    concatMap(() => {
      Session.removeToken();
      return (
        store.value.Core.App.appInitialized
          ? EMPTY
          : of(appInitialized())
      );
    })
  )
);

const authorizeSessionEpic: Epic = (
    action$,
    state$: StateObservable<{ Core: Core.State; }>
) => (
  action$.pipe(
    filter(isActionOf(authorizeSession)),
    concatMap(() => (
        state$.value.Core.App.appInitialized
            ? EMPTY
            : of(appInitialized())
    ))
  )
);

export default combineEpics(
  logoutEpic,
  loadSessionEpic,
  checkSessionEpic,
  authorizeSessionEpic,
  unauthorizeSessionEpic,
);
