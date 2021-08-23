import * as Redux from 'redux';
import middleware, { start } from './Middleware';
import { of } from 'rxjs';
import * as Rx from 'rxjs/operators';
import { wrap } from './Epic';
import * as Action from './Action';
const handle = (error) => {
    var _a;
    if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
        return of(Action.unauthorizeSession());
    }
    if ((error === null || error === void 0 ? void 0 : error.message) === 'Network Error') {
        const { method, url } = error.config;
        return of(Action.addNotification({
            variant: 'error',
            content: `Network Error: ${method.toUpperCase()} ${url}`
        }));
    }
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
        const { method, url } = error.config;
        return of(Action.addNotification({
            variant: 'error',
            content: `Request Timeout: ${method.toUpperCase()} ${url}`
        }));
    }
    return null;
};
export const create = (epic, reducer) => {
    const store = Redux.createStore(reducer, middleware);
    const wrapped = wrap(epic, action$ => action$.pipe(Rx.catchError((error, source) => ((error.isAxiosError && handle(error)) ||
        source))));
    start(wrapped);
    return store;
};
