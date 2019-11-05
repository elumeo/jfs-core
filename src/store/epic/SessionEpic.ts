import { Epic } from "redux-observable";
import { RootAction } from "../action/RootAction";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { configLoadedAction } from "../action/ConfigAction";
import { from, of, EMPTY } from "rxjs";
import {
  checkRightsAction,
  loginAction,
  logoutAction,
  sessionIsAuthorizedAction,
  sessionIsUnauthorizedAction
} from "../action/SessionAction";
import JSCApi from "../../JscApi";
import Session from "../../base/Session";
import { addToastAction } from "../action/ToastAction";
import catchError from './catchError'

/* TODO: Should Robot login keep the user permanently logged in even if the session expires ?! */
/* TODO: Fix - LoginDialog not shown if RobotLogin is enabled and the user has been logged. */

export const logoutEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(logoutAction)),
    switchMap(({ payload }) =>
      from(
        JSCApi.SessionClient.logout({ token: Session.getToken() })
      ).pipe(
        switchMap(() => {
          Session.removeToken();
          return payload ? of(sessionIsUnauthorizedAction(), payload) : of(sessionIsUnauthorizedAction())
        }),
        catchError(() => of(addToastAction({ contentTranslationId: "logout.failed", isError: true })))
      )
    )
  )
);

export const checkRightsEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(checkRightsAction)),
    switchMap(({ payload: sessionDTO }) => {
      Session.setToken(sessionDTO.token);
      return from(
        JSCApi.UserClient.getUserRights(sessionDTO.username, { filter: 'frontend:jfs' })
      ).pipe(
        switchMap(({ data }) => {
            if (data.assignedApps.some(app => app.name == store.value.configReducer.AppName)) {
              return of(sessionIsAuthorizedAction(sessionDTO));
            } else {
              return of(logoutAction(addToastAction({ contentTranslationId: 'login.noUserRights' })))
            }
          }
        ),
        catchError(e => of(addToastAction({ contentMessage: e.toString() })))
      )
    })
  )
);

export const sessionAuthorizeEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf([configLoadedAction, loginAction])),
    switchMap(action => {
        const { RobotUsername, RobotPassword } = store.value.configReducer;
        const { username, password } = action.payload;
        let observable;
        let errorHandler = ({}) => of(addToastAction({ contentTranslationId: 'login.failed', isError: true }));
        if (username !== undefined && password !== undefined) {
          observable = JSCApi.LoginClient.login(action.payload);
        } else if (RobotUsername !== undefined && RobotPassword !== undefined) {
          observable = JSCApi.LoginClient.login({ username: RobotUsername, password: RobotPassword });
        } else if (Session.getToken()) {
          observable = JSCApi.SessionClient.getCurrentSession();
          errorHandler = e => of(addToastAction({ contentTranslationId: 'session.expired' }));
        } else {
          return of();
        }
        return from(observable).pipe(
          switchMap(({ data: sessionDTO }) => of(checkRightsAction(sessionDTO))),
          catchError(errorHandler)
        )
      }
    )
  )
);
