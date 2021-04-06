import { filter, switchMap } from 'rxjs/operators';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import _ from 'lodash';
import { Epic } from 'Types/Redux';

const logout: Epic = (action$, state) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.logout)),
    // filter(() => (state.value.configReducer.config.JscWebSocketClient !== undefined && state.value.configReducer.loaded)),
    switchMap(() => {
      const disconnectRequestActions = [];
      const config = state.value.Core.Configuration.config;
      if (config.JscWebSocketClient !== undefined) {
        disconnectRequestActions.push(
          Action.webSocketDisconnectRequestAction(
            config.JscWebSocketClient.PrivateNamespace
          )
        );
      }
      if (config.JfsWebSocketClient !== undefined) {
        disconnectRequestActions.push(
          Action.webSocketDisconnectRequestAction(
            config.JfsWebSocketClient.PrivateNamespace
          )
        );
      }
      return disconnectRequestActions;
      // return of(webSocketDisconnectRequestAction(WS_NAMESPACES.JSC2JFS), webSocketDisconnectRequestAction(WS_NAMESPACES.JFS2JFS))
    })
  );
};

export default logout;
