import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { Epic, EpicMiddleware } from 'Types/Redux';

export const history = createHashHistory();
const epicMiddleware: EpicMiddleware = createEpicMiddleware({
  dependencies: { history }
});
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const storeEnhancer = applyMiddleware(epicMiddleware, routerMiddleware(history)
);
const middleware = composeEnhancers(storeEnhancer);
export const start = (epic: Epic): void => epicMiddleware.run(epic);
export default middleware;
