import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
const epicMiddleware = createEpicMiddleware();
export const history = createHashHistory();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const storeEnhancer = applyMiddleware(epicMiddleware, routerMiddleware(history));
const middleware = composeEnhancers(storeEnhancer);
export const start = (epic) => epicMiddleware.run(epic);
export default middleware;
//# sourceMappingURL=Middleware.js.map