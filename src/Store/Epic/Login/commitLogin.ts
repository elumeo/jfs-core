import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EMPTY, from } from 'rxjs';
import JSCApi from 'API/JSC';
import * as Action from 'Store/Action';
import * as Token from 'API/LOCAL_STORAGE/Token';
import { Epic } from 'Types/Redux';
import encryptString from 'Utilities/encryptString';

const commitLogin: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(Action.checkLogin)),
    switchMap(async (action) => {
      const newPassword = await encryptString(action.payload.password, state$.value.Core.Login.publicKey);
      return {
        username: action.payload.username,
        password: newPassword,
      };
    }),
    switchMap(action => from(
        JSCApi.LoginClient.loginFrontend(
          state$.value.Core.Configuration.config.AppName,
          {
            username: action.username,
            encryptedPassword: action.password,
          }
        ),
      ).pipe(
        switchMap(response => {
          Token.setToken(response.data.session.token);
          return [
            Action.authorizeSession({ frontendSessionDTO: response.data }),
            Action.loggedIn(),
          ];
        }),
        catchError(error => {
          let contentTranslationId = 'login.failed';
          if (error?.response?.data?.id === 'authorizationRequired') {
            contentTranslationId = 'userRights.checkFailed';
          }

          const actionsToReturn = [];
          actionsToReturn.push(Action.loginFailed());
          actionsToReturn.push(Action.addToastAction({
            contentTranslationId: contentTranslationId,
            isError: true,

          }));

          if (error?.response?.status !== 401) {
            actionsToReturn.push(Action.addErrorNotification(error));
          }

          return actionsToReturn;
        }),
      ),
    ),
    catchError((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return EMPTY;
    })
  );

export default commitLogin;
