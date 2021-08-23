import { filter, switchMap } from 'rxjs/operators';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';

const appIsInitialized: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.authorizeSession)),
    filter(() => (
      state$.value.Core.Configuration.loaded &&
      state$.value.Core.Session.isAuthorized
    )),
    switchMap(() => {
      const actions = [];
      const config = state$.value.Core.Configuration.config;
      if (config.JscWebSocketClient !== undefined) {
        actions.push(Action.webSocketAddNamespaceAction(
          config.JscWebSocketClient.PrivateNamespace
        ));
        actions.push(Action.webSocketConnectRequestAction(
          config.JscWebSocketClient.PrivateNamespace
        ));
      }
      if (config.JfsWebSocketClient !== undefined) {
        actions.push(Action.webSocketAddNamespaceAction(
          config.JfsWebSocketClient.PrivateNamespace
        ));
        actions.push(Action.webSocketConnectRequestAction(
          config.JfsWebSocketClient.PrivateNamespace
        ));
      }
      return actions;
    })
  );
};

export default appIsInitialized;
