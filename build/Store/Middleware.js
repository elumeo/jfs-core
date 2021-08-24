import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
export const history = createHashHistory();
const epicMiddleware = createEpicMiddleware({
    dependencies: { history },
});
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const storeEnhancer = applyMiddleware(epicMiddleware, routerMiddleware(history));
const middleware = composeEnhancers(storeEnhancer);
export const start = (epic) => epicMiddleware.run(epic);
export default middleware;
