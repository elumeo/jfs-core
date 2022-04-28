import { catchError, filter, switchMap } from 'rxjs/operators';
import { Epic } from 'Types/Redux';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { v4 as uuid } from 'uuid';

const showError: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.addErrorNotification)),
    switchMap(({ payload }) => {
      const id = uuid();
      const responseData = payload?.response?.data;

      const httpDetails = `${payload?.config?.method?.toUpperCase() || ''} ${payload?.config?.url || ''} ${payload?.response?.status || ''}`.trim()

      const title = payload?.response?.statusText || payload?.name;
      const subtitle = responseData?.error || payload?.message;
      const content = responseData?.message || null;

      return [Action.addNotification({
        id, title, subtitle, content, httpDetails, variant: 'error'
      })];
    }),
    catchError(error => {
      console.error(error)
      return []
    })
  );

export default showError;
