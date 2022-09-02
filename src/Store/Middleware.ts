import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { createHashHistory } from 'history';
import { Epic, EpicMiddleware } from 'Types/Redux';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router'

declare const window: Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown };
export const history = createHashHistory();
const epicMiddleware: EpicMiddleware = createEpicMiddleware({
  dependencies: { history },
});
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const storeEnhancer = applyMiddleware(
  epicMiddleware,
  createRouterMiddleware(history)
);
const middleware = (
  process.env.NODE_ENV == 'development'
  && typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  ? composeEnhancers(storeEnhancer)
  : storeEnhancer;
export const start = (epic: Epic): void => epicMiddleware.run(epic);
export default middleware;
