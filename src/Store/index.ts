import * as Redux from 'redux';
import middleware, { start } from './Middleware';
import reducer, { State } from './Reducer/Global';
import * as Rx from 'rxjs/operators';
import epic, { wrap } from './Epic';
import { Epic } from 'Types/Redux';

export const create = <T>(epic: Epic, reducer: Redux.Reducer<T>) => {
  const store = Redux.createStore(reducer, middleware);
  const wrapped = wrap(epic, action$ => action$.pipe(
    Rx.catchError((error, source) => {
      if (error?.response?.status === 401) {

      }
      console.error(error);
      return source;
    })
  ));
  start(wrapped);
  return store;
};

// export default create(epic, reducer) as Redux.Store<Redux.CombinedState<State>>;
