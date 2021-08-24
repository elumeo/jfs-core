import { filter, switchMap, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import JSCApi from '../../../API/JSC';
import * as Action from '../../Action';
import * as Token from '../../../API/LOCAL_STORAGE/Token';
const commitLogin = (action$, state$) => action$.pipe(filter(isActionOf(Action.checkLogin)), switchMap(action => from(JSCApi.LoginClient.loginFrontend(state$.value.Core.Configuration.config.AppName, {
    username: action.payload.username,
    password: action.payload.password,
})).pipe(switchMap(response => {
    Token.setToken(response.data.session.token);
    return of(Action.authorizeSession({ frontendSessionDTO: response.data }), Action.loggedIn());
}), catchError(error => {
    var _a, _b;
    let contentTranslationId = 'login.failed';
    if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id) === 'authorizationRequired') {
        contentTranslationId = 'userRights.checkFailed';
    }
    return of(Action.loginFailed(), Action.addToastAction({
        contentTranslationId: contentTranslationId,
        isError: true,
    }), Action.addErrorNotification(error));
}))));
export default commitLogin;
