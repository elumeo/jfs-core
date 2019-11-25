import { Epic } from 'redux-observable';
import { RootAction } from '../action/RootAction';
import { filter, map, switchMap, concatMap, catchError, tap } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { IConfigLoadedPayload } from '../action/ConfigAction';
import { from, of, EMPTY } from 'rxjs';
import {
  checkSession,
  unauthorizeSession,
  authorizeSession, IAuthorizeSessionPayload,
  logout, ILogoutPayload, loadSession
} from '../action/SessionAction';
import { checkLogin } from '../action/LoginAction';
import JSCApi from '../../JscApi';
import Session from '../../base/Session';
import { AxiosResponse } from 'axios';
import { addToastAction } from '../action/ToastAction';
import { appInitialized } from '../action/AppAction';

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
              : checkLogin({ username, password })
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
            ? [addToastAction({ contentTranslationId, isError: true })]
            : []
        ),
        unauthorizeSession()
      )
    })
  )
);

export const logoutEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(logout)),
    concatMap(
      (action: PayloadAction<string, ILogoutPayload>) => from(
        JSCApi.SessionClient.logout(
          action.payload && action.payload.sessionDTO
            ? action.payload.sessionDTO
            : store.value.sessionReducer.sessionDTO
        )
      ).pipe(
        switchMap(() => of(unauthorizeSession()))
      )
    )
  )
);

export const unauthorizeSessionEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(unauthorizeSession)),
    concatMap(() => {
      Session.removeToken();
      return of(appInitialized());
    })
  )
);

export const authorizeSessionEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(authorizeSession)),
    concatMap(
      (action: PayloadAction<string, IAuthorizeSessionPayload>) => {
        return of(appInitialized());
      }
    )
  )
);
