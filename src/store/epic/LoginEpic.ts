import { Epic } from 'redux-observable';
import { RootAction } from '../action/RootAction';
import { filter, switchMap, concatMap, catchError } from 'rxjs/operators';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { authorizeSession } from '../action/SessionAction';
import { checkLogin, ICheckLoginPayload, loggedIn, loginFailed } from '../action/LoginAction';
import JSCApi from '../../JscApi';
import { addToastAction } from '../action/ToastAction';

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
          (response) => of(
            authorizeSession({frontendSessionDTO: response.data}),
            loggedIn()
          )
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
