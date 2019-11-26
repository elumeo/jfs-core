import { Epic } from 'redux-observable';
import { RootAction } from '../action/RootAction';
import { filter, switchMap, concatMap, catchError, tap } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { authorizeSession, unauthorizeSession } from '../action/SessionAction';
import { checkLogin, ICheckLoginPayload, loggedIn, loginFailed } from '../action/LoginAction';
import JSCApi from '../../JscApi';
import { addToastAction } from '../action/ToastAction';
import Session from '../../base/Session';

export const loginEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(checkLogin)),
    concatMap(
      (action: PayloadAction<string, ICheckLoginPayload>) => from(
        JSCApi.LoginClient.loginFrontend(
          store.value.configReducer.config.AppName,
          {
            username: action.payload.username,
            password: action.payload.password
          }
        )
      ).pipe(
        // This is piped to ensure that the login can be performed again after
        // failing to login
        switchMap(
          (response) => {
            Session.setToken(response.data.session.token);
            return of(
              authorizeSession({frontendSessionDTO: response.data}),
              loggedIn()
            )
          }
        ),
        catchError(
          error => {
            let contentTranslationId = 'login.failed';
            if (error.response && error.response.data && error.response.data.id && error.response.data.id === 'authorizationRequired') {
              contentTranslationId = 'userRights.checkFailed';
            }

            return of(
              loginFailed(),
              addToastAction({
                contentTranslationId: contentTranslationId,
                isError: true
              })
            )
          }
        )
      )
    )
  )
);

export const robotLoginRefreshEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(unauthorizeSession)),
    filter(() => (
      store.value.appReducer.allowRobotLogin &&
      store.value.configReducer.config.RobotUsername &&
      store.value.configReducer.config.RobotPassword &&
      !store.value.loginReducer.failedLogins
    )),
    switchMap(
      () => of(
        checkLogin({
          username: store.value.configReducer.config.RobotUsername,
          password: store.value.configReducer.config.RobotPassword
        })
      )
    )
  )
)
