import { applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import { createEpicMiddleware } from 'redux-observable';
import { createHashHistory } from 'history';
import { Epic, EpicMiddleware } from 'Types/Redux';

declare const window: Window;
declare const process: NodeJS.Process;
export const history = createHashHistory();
const epicMiddleware: EpicMiddleware = createEpicMiddleware({
  dependencies: { history },
});
const composeEnhancers = composeWithDevTools({
  trace: true, traceLimit: 25, serialize: {
    options: {
      map: true,
    }
  }
});
const storeEnhancer = applyMiddleware(
  epicMiddleware,
);
const middleware = (
  process.env.NODE_ENV == 'development'
  && typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  ? composeEnhancers(storeEnhancer)
  : storeEnhancer;
export const start = (epic: Epic): void => epicMiddleware.run(epic);
export default middleware;
