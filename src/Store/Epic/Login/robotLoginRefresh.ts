import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';

const robotLoginRefresh: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(Action.unauthorizeSession)),
    filter(
      () =>
        state$.value.Core.App.allowRobotLogin &&
        state$.value.Core.Configuration.config.RobotUsername &&
        state$.value.Core.Configuration.config.RobotPassword &&
        !state$.value.Core.Login.failedLogins,
    ),
    switchMap(() =>
      of(
        Action.checkLogin({
          username: state$.value.Core.Configuration.config.RobotUsername,
          password: state$.value.Core.Configuration.config.RobotPassword,
        }),
      ),
    ),
  );

export default robotLoginRefresh;
