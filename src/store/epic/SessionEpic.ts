import { Epic } from 'redux-observable';
import { RootAction } from '../action/RootAction';
import { filter, map, switchMap, concatMap, catchError, tap } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { configLoadedAction, IConfigLoadedPayload } from '../action/ConfigAction';
import { from, of, EMPTY } from 'rxjs';
import {
  checkSession,
  checkLogin, ICheckLoginPayload,
  unauthorizeSession,
  authorizeSession, IAuthorizeSessionPayload,
  logout, ILogoutPayload
} from '../action/SessionAction';
import JSCApi from '../../JscApi';
import Session from '../../base/Session';
import { AxiosResponse } from 'axios';

/* TODO: Should Robot login keep the user permanently logged in even if the session expires ?! */
/* TODO: Fix - LoginDialog not shown if RobotLogin is enabled and the user has been logged. */

export const loadSessionEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(configLoadedAction)),
    map((action: PayloadAction<string, IConfigLoadedPayload>) => {
      const {
        RobotUsername: username,
        RobotPassword: password
      } = action.payload.config;
      const { allowRobotLogin } = store.value.appReducer;
      return [allowRobotLogin, { username, password }];
    }),
    filter(
      ([allowRobotLogin, { username, password }]) => (
        Session.getToken() || allowRobotLogin && username && password
      )
    ),
    tap(console.log),
    concatMap(
      ([, { username, password }]) => of(
        Session.getToken()
          ? checkSession()
          : checkLogin({ username, password })
      )
    )
  )
)

export const loginEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(checkLogin)),
    concatMap(
      (action: PayloadAction<string, ICheckLoginPayload>) => {
        return from(
          JSCApi.LoginClient.loginFrontend(
            store.value.configReducer.config.AppName,
            { username: action.payload.username,
              password: action.payload.password }
          )
        ).pipe(
          switchMap(
            (response: AxiosResponse<JSCApi.DTO.Session.IFrontendSessionDTO>) => of(
              authorizeSession({ frontendSessionDTO: response.data })
            )
          )
        )
      }
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
            authorizeSession({ frontendSessionDTO: response.data })
          )
        )
      )
    ),
    catchError(() => {
      return of(unauthorizeSession());
    })
  )
)

export const logoutEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(logout)),
    concatMap(
      (action: PayloadAction<string, ILogoutPayload>) => from(
        JSCApi.SessionClient.logout(
          action.payload && action.payload.frontendSessionDTO
            ? action.payload.frontendSessionDTO.session
            : store.value.sessionReducer.frontendSessionDTO.session
        )
      ).pipe(
        switchMap(() => of(unauthorizeSession()))
      )
    ),
    catchError(error => {
      console.error(error);
      return EMPTY;
    })
  )
)

export const unauthorizeSessionEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf([unauthorizeSession])),
    concatMap(() => {
      Session.removeToken();
      return EMPTY;
    })
  )
)

export const authorizeSessionEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(authorizeSession)),
    concatMap(
      (action: PayloadAction<string, IAuthorizeSessionPayload>) => {
        Session.setToken(action.payload.frontendSessionDTO.session.token);
        return EMPTY;
      }
    )
  )
);
