import { combineEpics } from 'redux-observable';
import { filter, switchMap, concatMap, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { authorizeSession, unauthorizeSession } from '../Action/SessionAction';
import { checkLogin, loggedIn, loginFailed } from '../Action/LoginAction';
import JSCApi from '../../Jsc/Api';
import { addToastAction } from '../Action/ToastAction';
import Session from '../../Base/Session';
const loginEpic = (action$, state$) => (action$.pipe(filter(isActionOf(checkLogin)), concatMap(action => from(JSCApi.LoginClient.loginFrontend(state$.value.Core.Configuration.config.AppName, {
    username: action.payload.username,
    password: action.payload.password
})).pipe(switchMap((response) => {
    Session.setToken(response.data.session.token);
    return of(authorizeSession({ frontendSessionDTO: response.data }), loggedIn());
}), catchError(error => {
    let contentTranslationId = 'login.failed';
    if (error.response && error.response.data && error.response.data.id && error.response.data.id === 'authorizationRequired') {
        contentTranslationId = 'userRights.checkFailed';
    }
    return of(loginFailed(), addToastAction({
        contentTranslationId: contentTranslationId,
        isError: true
    }));
})))));
const robotLoginRefreshEpic = (action$, state$) => (action$.pipe(filter(isActionOf(unauthorizeSession)), filter(() => (state$.value.Core.App.allowRobotLogin &&
    state$.value.Core.Configuration.config.RobotUsername &&
    state$.value.Core.Configuration.config.RobotPassword &&
    !state$.value.Core.Login.failedLogins)), switchMap(() => of(checkLogin({
    username: state$.value.Core.Configuration.config.RobotUsername,
    password: state$.value.Core.Configuration.config.RobotPassword
})))));
export default combineEpics(robotLoginRefreshEpic, loginEpic);
//# sourceMappingURL=LoginEpic.js.map