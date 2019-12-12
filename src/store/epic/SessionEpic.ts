import { Epic } from 'redux-observable';
import { RootAction } from '../action/RootAction';
import { catchError, concatMap, filter, map, switchMap, debounce } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { from, of, concat, timer, EMPTY } from 'rxjs';
import {
  authorizeSession,
  checkSession,
  ILogoutPayload,
  loadSession,
  logout,
  unauthorizeSession
} from '../action/SessionAction';
import { checkLogin } from '../action/LoginAction';
import JSCApi from '../../JscApi';
import Session from '../../base/Session';
import { AxiosResponse } from 'axios';
import { addToastAction } from '../action/ToastAction';
import { appInitialized } from '../action/AppAction';
import { beforeLogoutHookFinished, logoutFinished, closeLogout } from '../action/LogoutAction';

export const loadSessionEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(loadSession)),
    map(() => {
      const {
        RobotUsername: username,
        RobotPassword: password
      } = store.value.configReducer.config;
      const {allowRobotLogin} = store.value.appReducer;
      return [allowRobotLogin, {username, password}];
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

export const checkSessionEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(checkSession)),
    concatMap(
      () => from(JSCApi.SessionClient.getCurrentSessionFrontend(
        store.value.configReducer.config.AppName,
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

export const beforeLogoutHookEpic = handleLogoutHook => (action$, store) => (
  action$.pipe(
    filter(isActionOf(logout)),
    concatMap(action => concat(
      handleLogoutHook(action, store),
      of(beforeLogoutHookFinished())
    ))
  )
);

export const logoutEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(beforeLogoutHookFinished)),
    debounce(() => timer(200)),
    concatMap(
      (action: PayloadAction<string, ILogoutPayload>) => from(
        JSCApi.SessionClient.logout(
          action.payload && action.payload.sessionDTO
            ? action.payload.sessionDTO
            : store.value.sessionReducer.sessionDTO
        )
      ).pipe(
        switchMap(() => of(logoutFinished()))
      )
    )
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

export const unauthorizeSessionEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(unauthorizeSession)),
    concatMap(() => {
      Session.removeToken();
      return (
        store.value.appReducer.appInitialized
          ? EMPTY
          : of(appInitialized())
      );
    })
  )
);

export const authorizeSessionEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(authorizeSession)),
    concatMap(() => of(appInitialized()))
  )
);
