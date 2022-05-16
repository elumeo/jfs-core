import { catchError, filter, switchMap } from 'rxjs/operators';
import { Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { v4 as uuid } from 'uuid';
import * as Types from 'Types/Notification';
import { AxiosError } from 'axios';

export const mapErrorToNotification = (error: AxiosError): Types.Notification => {
  const id = uuid();
  const responseData = error?.response?.data;

  const httpDetails = `${error?.config?.method?.toUpperCase() || ''} ${error?.config?.url || ''} ${error?.response?.status || ''}`.trim()

  const title = error?.response?.statusText || error?.name;
  const subtitle = responseData?.error || error?.message;
  const content = responseData?.message || null;

  return { id, title, subtitle, content, httpDetails, variant: 'error' }
}

const showError: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.addErrorNotification)),
    switchMap(({ payload }) => [
      Action.addNotification(mapErrorToNotification(payload))
    ]),
    catchError(error => {
      // eslint-disable-next-line no-console
      console.error(error)
      return []
    })
  );

export default showError;
