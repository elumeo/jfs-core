import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import JSCApi from '../../base/JscApi';
import {
  checkLoginAction,
  checkSessionAction,
  checkUserRightsAction,
  ILoginType, logoutAction,
  sessionIsAuthorizedAction,
  sessionIsUnauthorizedAction
} from '../action/SessionAction';
import Config from '../../base/Config';
import { isActionOf, PayloadAction } from "typesafe-actions";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
import { catchError, filter, switchMap } from "rxjs/operators";
import { AxiosResponse } from "axios";
import { RootAction } from '../action/RootAction';
import { addToastAction } from "../action/BaseAction";
import Session from "../../base/Session";

export const checkSessionEpic: Epic<RootAction, RootAction> = (action$) =>
  action$.pipe(
    filter(isActionOf(checkSessionAction)),
    switchMap(() => {
      if (Session.getToken() === undefined) {
        return of(sessionIsUnauthorizedAction());
      } else {
        return JSCApi.SessionClient.getCurrentSession()
          .then((response: AxiosResponse<JSCApi.DTO.Session.ISessionDTO>) =>
            checkUserRightsAction(response.data));
      }
    }),
    catchError(() => of(sessionIsUnauthorizedAction()))
  );

export const checkLoginEpic: Epic<RootAction, RootAction> = action$ =>
  action$.pipe(
    filter(isActionOf(checkLoginAction)),
    switchMap((action: PayloadAction<string, ILoginType>) => {
        const credentials: JSCApi.DTO.Login.ICredentialsDTO = {
          username: action.payload.username,
          password: action.payload.password
        };

        return from(
          JSCApi.LoginClient.login(credentials)
        ).pipe(switchMap(({ data, data: { token } }) => {
            Session.setToken(token);
            return of(
              checkUserRightsAction(data),
            )
          }),
          /* TODO catch error and forward to toast */
          catchError(() =>
            of(
              sessionIsUnauthorizedAction(),
              addToastAction({
                contentTranslationId: 'login.failed',
                isError: true
              })
            )
          )
        );
      }
    )
  )
;

export const checkUserRightsEpic: Epic<RootAction, RootAction> = (action$) =>
  action$.pipe(
    filter(isActionOf(checkUserRightsAction)),
    switchMap((action: PayloadAction<string, ISessionDTO>) => {
      return from(JSCApi.UserClient.getUserRights(action.payload.username, {filter: 'frontend:jfs'}))
        .pipe(
          switchMap(({ data }) => {
            if (data.assignedApps.some(app => app.name == Config.AppName)) {
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

export const logoutEpic: Epic<RootAction, RootAction> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(logoutAction)),
    switchMap(() => {
      const {sessionReducer} = store.value;
      return from(JSCApi.SessionClient.logout(sessionReducer.sessionDTO))
        .pipe(switchMap(() => {
          window.sessionStorage.loginReloaded = false;
          return of(sessionIsUnauthorizedAction());
        }),
          catchError(() => of(sessionIsUnauthorizedAction())));
    })
  );

// export const loggerEpic: Epic<RootAction, RootAction> = (action$, store) =>
//   action$.pipe(
//     filter(action$ => !!action$.type),
//     switchMap((action) => {
//       console.log('loggerEpic', action, isActionOf(checkLoginAction)(action));
//       return EMPTY
//     }),
//     catchError(() => of(sessionIsUnauthorizedAction()))
//   );
