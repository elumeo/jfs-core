import * as Redux from 'redux';
import middleware, { start } from './Middleware';
import { Epic } from 'Types/Redux';

const createStore = <T>(root: Epic, rootReducer: Redux.Reducer<T>) => {
  const store = Redux.createStore(rootReducer, middleware);
  start(root);
  return store;
};

export default createStore;
