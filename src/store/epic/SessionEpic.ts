import { Epic } from 'redux-observable';
import { from, of, EMPTY } from 'rxjs';
import JSCApi from '../../JscApi';
import {
  checkLoginAction,
  checkSessionAction,
  checkUserRightsAction,
  ILoginType, logoutAction,
  sessionIsAuthorizedAction,
  sessionIsUnauthorizedAction
} from '../action/SessionAction';
import { isActionOf, PayloadAction } from "typesafe-actions";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
import { catchError, filter, switchMap } from "rxjs/operators";
import { RootAction } from '../action/RootAction';
import { addToastAction } from "../action/ToastAction";
import { configLoadedAction } from "../action/ConfigAction";
import Session from "../../base/Session";

// noinspection JSUnusedGlobalSymbols
export const checkSessionEpic: Epic<RootAction, RootAction> = (action$) =>
  action$.pipe(
    filter(isActionOf(checkSessionAction)),
    switchMap(() => {
      if (Session.getToken() === undefined) {
        return of(sessionIsUnauthorizedAction());
      } else {
        return from(
          JSCApi.SessionClient.getCurrentSession()
        ).pipe(
          switchMap(
            (response: any) => of(checkUserRightsAction(response.data))
          ),
          catchError(() => EMPTY)
        )
      }
    }),
    catchError(() => of(sessionIsUnauthorizedAction()))
  );

// noinspection JSUnusedGlobalSymbols
export const checkLoginEpic: Epic<RootAction, RootAction> = action$ =>
  action$.pipe(
    filter(isActionOf(checkLoginAction)),
    switchMap((action: PayloadAction<string, ILoginType>) => {
        const credentials: JSCApi.DTO.Login.ICredentialsDTO = {
          username: action.payload.username,
          password: action.payload.password
        };

        // noinspection TypeScriptValidateJSTypes
        return from(
          JSCApi.LoginClient.login(credentials)
        ).pipe(
          switchMap(({ data, data: { token } }) => {
            if(token === undefined) {
              return of(
                sessionIsUnauthorizedAction(),
                addToastAction({
                  contentTranslationId: 'login.failed',
                  isError: true
                }));
            } else {
              Session.setToken(token);
              return of(checkUserRightsAction(data));
            }
          }),
          catchError(() => of(
            sessionIsUnauthorizedAction(),
            addToastAction({
              contentTranslationId: 'login.failed',
              isError: true
            })
          ))
        );
      }
    )
  )
;

// noinspection JSUnusedGlobalSymbols
export const checkUserRightsEpic: Epic<RootAction, RootAction> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(checkUserRightsAction)),
    switchMap((action: PayloadAction<string, ISessionDTO>) => {
      return from(JSCApi.UserClient.getUserRights(action.payload.username, { filter: 'frontend:jfs' }))
        .pipe(
          switchMap(({ data }) => {
            if (data.assignedApps.some(
              app => app.name == store.value.configReducer.AppName
            )) {
              return of(sessionIsAuthorizedAction(action.payload));
            } else {
              throw Error();
            }
          }),
          catchError(() =>
            of(
              sessionIsUnauthorizedAction(),
              addToastAction({
                contentTranslationId: 'login.noUserRights',
                isError: true
              })
            )
          )
        );
    })
  )
;

// noinspection JSUnusedGlobalSymbols
export const logoutEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(logoutAction)),
    switchMap(
      () => from(
        JSCApi.SessionClient.logout(
          store.value.sessionReducer.sessionDTO
        )
      ).pipe(
        switchMap(() => {
          Session.removeToken();
          return of(sessionIsUnauthorizedAction());
        }),
        catchError(() => of(sessionIsUnauthorizedAction()))
      )
    )
  )
);

export const robotLoginEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(configLoadedAction)),
    switchMap(
      () => {
        const {
          value: {
            sessionReducer: { isAuthorized, isCheckingLogin },
            configReducer: { RobotUsername, RobotPassword }
          }
        } = store;

        return (
          isCheckingLogin || isAuthorized || !(RobotUsername && RobotPassword)
            ? EMPTY
            : of(
            checkLoginAction({
              username: RobotUsername,
              password: RobotPassword
            })
            )
        )
      }
    )
  )
);

export const autoSessionCheck: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(configLoadedAction)),
    switchMap(
      () => {
        const {
          value: {
            sessionReducer: { isCheckingSession, sessionStateRevalidated }
          }
        } = store;

        return (
          !isCheckingSession && !sessionStateRevalidated
            ? of(checkSessionAction())
            : EMPTY
        )
      }
    )
  )
);
