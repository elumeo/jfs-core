import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from '../Action';
import { v4 as uuid } from 'uuid';
const showError = action$ => action$.pipe(filter(isActionOf(Action.addErrorNotification)), switchMap(({ payload }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const id = uuid();
    const responseData = (_b = (_a = payload === null || payload === void 0 ? void 0 : payload.response) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {};
    const title = (_c = responseData === null || responseData === void 0 ? void 0 : responseData.id) !== null && _c !== void 0 ? _c : payload === null || payload === void 0 ? void 0 : payload.name;
    const subtitle = (_d = responseData === null || responseData === void 0 ? void 0 : responseData.message) !== null && _d !== void 0 ? _d : payload === null || payload === void 0 ? void 0 : payload.message;
    const content = (_e = responseData === null || responseData === void 0 ? void 0 : responseData.error) !== null && _e !== void 0 ? _e : null;
    return [Action.addNotification({
            id: id,
            title: title,
            subtitle: subtitle,
            content: content,
            httpDetails: payload.config.method.toUpperCase() + " " + payload.config.url + " " + ((_g = (_f = payload === null || payload === void 0 ? void 0 : payload.response) === null || _f === void 0 ? void 0 : _f.status) !== null && _g !== void 0 ? _g : ""),
            variant: 'error',
        })];
}));
export default showError;
