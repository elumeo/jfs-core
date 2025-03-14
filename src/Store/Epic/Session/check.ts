import { catchError, concatMap, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of, concat, EMPTY } from 'rxjs';
import { AxiosResponse } from 'axios';
import * as Action from 'Store/Action';
import JSCApi from 'API/JSC';
import { Epic } from 'Types/Redux';

const toastableErrorIds: string[] = ['authorizationRequired', 'invalidSession'];

const checkSession: Epic = (action$, store) =>
  action$.pipe(
    filter(isActionOf(Action.checkSession)),
    concatMap(() =>
      from(JSCApi.SessionClient.getCurrentSessionFrontend(store.value.Core.Configuration.config.AppName)).pipe(
        switchMap((response: AxiosResponse<JSCApi.DTO.Session.IFrontendSessionDTO>) => of(Action.authorizeSession({ frontendSessionDTO: response.data })))
      )
    ),
    catchError((error) => {
      const isToastable = toastableErrorIds.find((id) => id === error?.response?.id);

      return concat(
        isToastable
          ? of(
            Action.addToastAction({
              contentTranslationId: isToastable ? (error.response.id === 'authorizationRequired' ? 'userRights.checkFailed' : 'session.expired') : null,
              isError: true,
            })
          )
          : EMPTY,
        of(Action.unauthorizeSession())
      );
    })
  );

export default checkSession;
