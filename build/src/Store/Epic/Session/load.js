import { filter, map, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import * as Action from '../../../../Store/Action';
import * as Token from '../../../../API/LOCAL_STORAGE/Token';
const loadSession = (action$, store) => (action$.pipe(filter(isActionOf(Action.loadSession)), map(() => {
    const { RobotUsername: username, RobotPassword: password } = store.value.Core.Configuration.config;
    const { allowRobotLogin } = store.value.Core.App;
    return [allowRobotLogin, { username, password }];
}), switchMap(([allowRobotLogin, { username, password }]) => of(Token.getToken() || allowRobotLogin && username && password
    ? (Token.getToken()
        ? Action.checkSession()
        : Action.checkLogin({ username, password }))
    : Action.unauthorizeSession()))));
export default loadSession;
