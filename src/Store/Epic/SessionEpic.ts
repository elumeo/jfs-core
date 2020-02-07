import { Epic } from 'redux-observable';
import { RootAction } from '../Action/RootAction';
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
} from '../Action/SessionAction';
import { checkLogin } from '../Action/LoginAction';
import JSCApi from '../../Jsc/JscApi';
import Session from '../../Base/Session';
import { AxiosResponse } from 'axios';
import { addToastAction } from '../Action/ToastAction';
import { appInitialized } from '../Action/AppAction';
import { beforeLogoutHookFinished, logoutFinished, closeLogout } from '../Action/LogoutAction';

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
    concatMap((action: PayloadAction<string, ILogoutPayload>) => {
      const session = (action.payload && action.payload.sessionDTO) ? action.payload.sessionDTO : store.value.sessionReducer.sessionDTO;
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
