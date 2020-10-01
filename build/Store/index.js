import * as Redux from 'redux';
import middleware, { start } from './Middleware';
const createStore = (root, rootReducer) => {
    const store = Redux.createStore(rootReducer, middleware);
    start(root);
    return store;
};
export default createStore;
//# sourceMappingURL=index.js.map