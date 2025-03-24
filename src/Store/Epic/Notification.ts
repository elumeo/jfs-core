import { catchError, filter, switchMap } from 'rxjs/operators';
import { Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';

import * as Types from 'Types/Notification';
import { AxiosError } from 'axios';
import { JscError } from 'Utilities/Format/Error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapErrorToNotification = (error: AxiosError<JscError | any>): Types.Notification => {
  const responseData = error?.response?.data;

  const title = error?.response?.statusText || error?.name;
  const subtitle = responseData?.error || error?.message;
  const content = responseData?.message || null;

  const detailsAppendix = (title != error?.response?.status?.toString()) && error?.response?.status || ''
  const httpDetails = `${error?.config?.method?.toUpperCase() || ''} ${error?.config?.url || ''} ${detailsAppendix}`.trim()

  return { title, subtitle, content, httpDetails, variant: 'error' }
}

const showError: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.addErrorNotification)),
    switchMap(({ payload }) => [
      Action.addNotification(mapErrorToNotification(payload))
    ]),
    catchError((error: unknown) => {
      // eslint-disable-next-line no-console
      console.error(error)
      return []
    })
  );

export default showError;
