import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
const history = createHashHistory();
export default (rootEpic, rootReducer) => {
    const epicMiddleware = createEpicMiddleware();
    const store = composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history)))(createStore)(rootReducer);
    epicMiddleware.run(rootEpic);
    return store;
};
//# sourceMappingURL=index.js.map