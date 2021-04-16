import * as Redux from 'redux';
import middleware, { start } from './Middleware';
import reducer from './Reducer/Global';
import * as Rx from 'rxjs/operators';
import epic, { wrap } from './Epic';
export const create = (epic, reducer) => {
    const store = Redux.createStore(reducer, middleware);
    const wrapped = wrap(epic, action$ => action$.pipe(Rx.catchError((error, source) => {
        var _a;
        if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
        }
        console.error(error);
        return source;
    })));
    start(wrapped);
    return store;
};
export default create(epic, reducer);
