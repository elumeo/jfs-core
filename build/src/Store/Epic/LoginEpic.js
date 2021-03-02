import { combineEpics } from 'redux-observable';
import { filter, switchMap, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import JSCApi from '../../../API/JSC/Api/index';
import * as Action from '../../../Store/Action';
import * as Token from '../../API/LOCAL_STORAGE/Token';
const loginEpic = (action$, state$) => (action$.pipe(filter(isActionOf(Action.checkLogin)), switchMap(action => from(JSCApi.LoginClient.loginFrontend(state$.value.Core.Configuration.config.AppName, {
    username: action.payload.username,
    password: action.payload.password
})).pipe(switchMap(response => {
    Token.setToken(response.data.session.token);
    return of(Action.authorizeSession({ frontendSessionDTO: response.data }), Action.loggedIn());
}), catchError(error => {
    let contentTranslationId = 'login.failed';
    if (error.response && error.response.data && error.response.data.id && error.response.data.id === 'authorizationRequired') {
        contentTranslationId = 'userRights.checkFailed';
    }
    return of(Action.loginFailed(), Action.addToastAction({
        contentTranslationId: contentTranslationId,
        isError: true
    }));
})))));
const robotLoginRefreshEpic = (action$, state$) => (action$.pipe(filter(isActionOf(Action.unauthorizeSession)), filter(() => (state$.value.Core.App.allowRobotLogin &&
    state$.value.Core.Configuration.config.RobotUsername &&
    state$.value.Core.Configuration.config.RobotPassword &&
    !state$.value.Core.Login.failedLogins)), switchMap(() => of(Action.checkLogin({
    username: state$.value.Core.Configuration.config.RobotUsername,
    password: state$.value.Core.Configuration.config.RobotPassword
})))));
export default combineEpics(robotLoginRefreshEpic, loginEpic);
//# sourceMappingURL=LoginEpic.js.map