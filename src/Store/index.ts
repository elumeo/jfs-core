import * as Redux from 'redux';
import middleware, { start } from './Middleware';
import { of } from 'rxjs';
import * as Rx from 'rxjs/operators';
import { wrap } from './Epic';
import { Epic } from 'Types/Redux';
import * as Action from './Action';
import { AxiosError } from 'axios';

const handle = (error: AxiosError) => {
  if (error?.response?.status === 401) {
    return of(Action.unauthorizeSession());
  }
  if (error?.message === 'Network Error') {
    const { method, url } = error.config;
    return of(
      Action.addNotification({
        variant: 'error',
        content: `Network Error: ${method.toUpperCase()} ${url}`,
      }),
    );
  }
  if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
    const { method, url } = error.config;
    return of(
      Action.addNotification({
        variant: 'error',
        content: `Request Timeout: ${method.toUpperCase()} ${url}`,
      }),
    );
  }
  return null;
};

export const create = <T>(
  epic: Epic,
  reducer: Redux.Reducer<T>,
): Redux.Store => {
  const store = Redux.createStore(reducer, middleware);
  const wrapped = wrap(epic, (action$) =>
    action$.pipe(
      Rx.catchError(
        (error, source) => (error.isAxiosError && handle(error)) || source,
      )
    )
  );
  start(wrapped);
  return store;
};
