import { filter, switchMap, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import JSCApi from 'API/JSC';
import * as Action from 'Store/Action';
import * as Token from 'API/LOCAL_STORAGE/Token';
import { Epic } from 'Types/Redux';

const commitLogin: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(Action.checkLogin)),
    switchMap(action =>
      from(
        JSCApi.LoginClient.loginFrontend(
          state$.value.Core.Configuration.config.AppName,
          {
            username: action.payload.username,
            password: action.payload.password,
          },
        ),
      ).pipe(
        switchMap(response => {
          Token.setToken(response.data.session.token);
          return of(
            Action.authorizeSession({ frontendSessionDTO: response.data }),
            Action.loggedIn(),
          );
        }),
        catchError(error => {
          let contentTranslationId = 'login.failed';
          if (error?.response?.data?.id === 'authorizationRequired') {
            contentTranslationId = 'userRights.checkFailed';
          }

          return of(
            Action.loginFailed(),
            Action.addToastAction({
              contentTranslationId: contentTranslationId,
              isError: true,
            }),
            Action.addErrorNotification(error),
          );
        }),
      ),
    ),
  );

export default commitLogin;
