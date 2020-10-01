import { combineEpics } from 'redux-observable'
import { catchError, concatMap, filter, map, switchMap } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { from, of, concat, EMPTY } from 'rxjs';
import { AxiosResponse } from 'axios';
import * as Action from 'Store/Action';
import JSCApi from 'Jsc/Api';
import Session from '../../Base/Session';
import { Epic } from 'Types/Redux';
import { logout } from 'Store/Action';

const loadSessionEpic: Epic = (action$, store) => (
  action$.pipe(
    filter(isActionOf(Action.loadSession)),
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
              ? Action.checkSession()
              : Action.checkLogin({username, password})
          )
          : Action.unauthorizeSession()
      )
    )
  )
);

const checkSessionEpic: Epic = (action$, store) => (
  action$.pipe(
    filter(isActionOf(Action.checkSession)),
    concatMap(
      () => from(JSCApi.SessionClient.getCurrentSessionFrontend(
        store.value.Core.Configuration.config.AppName,
      )).pipe(
        switchMap(
          (response: AxiosResponse<JSCApi.DTO.Session.IFrontendSessionDTO>) => of(
            Action.authorizeSession({frontendSessionDTO: response.data})
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
            ? [Action.addToastAction({contentTranslationId, isError: true})]
            : []
        ),
        Action.unauthorizeSession()
      )
    })
  )
);

export const beforeLogoutHookEpic = handleLogoutHook => (action$, store) => (
  action$.pipe(
    filter(isActionOf(Action.logout)),
    concatMap(action => concat(
      handleLogoutHook(action, store),
      of(Action.beforeLogoutHookFinished())
    ))
  )
);

const logoutEpic: Epic = (action$, store) => (
  action$.pipe(
    filter(isActionOf(Action.beforeLogoutHookFinished)),
    concatMap((action: PayloadAction<string, logout.Payload>) => {
      const session = (
        action.payload && action.payload.sessionDTO
          ? action.payload.sessionDTO
          : store.value.Core.Session.sessionDTO
      );
      if (session) {
        return from(JSCApi.SessionClient.logout(session)).pipe(
          switchMap(() => of(Action.logoutFinished())),
          catchError((error) => {
            if (error && error.response && error.response.status === 401) {
              return of(Action.logoutFinished());
            }
            throw error;
          })
        )
      } else {
        return of(Action.logoutFinished());
      }
    })
  )
);

export const afterLogoutHookEpic = handleLogoutFinished => action$ => (
  action$.pipe(
    filter(isActionOf(Action.logoutFinished)),
    concatMap(
      action => concat(
        handleLogoutFinished(action),
        of(Action.closeLogout()),
        of(Action.unauthorizeSession())
      )
    )
  )
)

const unauthorizeSessionEpic: Epic = (action$, store) => (
  action$.pipe(
    filter(isActionOf(Action.unauthorizeSession)),
    concatMap(() => {
      Session.removeToken();
      return (
        store.value.Core.App.appInitialized
          ? EMPTY
          : of(Action.appInitialized())
      );
    })
  )
);

const authorizeSessionEpic: Epic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(Action.authorizeSession)),
    concatMap(() => (
        state$.value.Core.App.appInitialized
            ? EMPTY
            : of(Action.appInitialized())
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
