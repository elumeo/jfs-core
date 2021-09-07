import { filter, switchMap, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from } from 'rxjs';
import JSCApi from '../../../API/JSC';
import * as Action from '../../Action';
import * as Token from '../../../API/LOCAL_STORAGE/Token';
const commitLogin = (action$, state$) => action$.pipe(filter(isActionOf(Action.checkLogin)), switchMap(action => from(JSCApi.LoginClient.loginFrontend(state$.value.Core.Configuration.config.AppName, {
    username: action.payload.username,
    password: action.payload.password,
})).pipe(switchMap(response => {
    Token.setToken(response.data.session.token);
    return [
        Action.authorizeSession({ frontendSessionDTO: response.data }),
        Action.loggedIn(),
    ];
}), catchError(error => {
    var _a, _b, _c;
    let contentTranslationId = 'login.failed';
    if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id) === 'authorizationRequired') {
        contentTranslationId = 'userRights.checkFailed';
    }
    const actionsToReturn = [];
    actionsToReturn.push(Action.loginFailed());
    actionsToReturn.push(Action.addToastAction({
        contentTranslationId: contentTranslationId,
        isError: true
    }));
    if (((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.status) !== 401) {
        actionsToReturn.push(Action.addErrorNotification(error));
    }
    return actionsToReturn;
}))));
export default commitLogin;
