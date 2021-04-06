import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { WSClient } from 'API/WS/WSClient';
import _ from 'lodash';
import { Epic } from 'Types/Redux';

export const connectRequest: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketConnectRequestAction)),
    filter(() => (
      state$.value.Core.Configuration.loaded &&
      state$.value.Core.Session.isAuthorized
    )),
    concatMap(action => WSClient.leaveAllRooms(
      action.payload,
      state$.value.Core.WebSocket[action.payload].rooms
    )),
    concatMap(namespace => WSClient.disconnect(namespace)),
    concatMap(namespace => {
      let host: string = null;
      const config = state$.value.Core.Configuration.config;
      let path = '/socket.io';
      if (
        config.JscWebSocketClient !== undefined &&
        namespace === config.JscWebSocketClient.PrivateNamespace
      ) {
        host = config.JscWebSocketClient.Host;
        path = (
          config.JscWebSocketClient.Path !== undefined &&
          config.JscWebSocketClient.Path !== null
            ? config.JscWebSocketClient.Path + path
            : path
        );
      } else if (
        config.JfsWebSocketClient !== undefined &&
        namespace === config.JfsWebSocketClient.PrivateNamespace
      ) {
        host = config.JfsWebSocketClient.Host;
        path = (
          config.JfsWebSocketClient.Path !== undefined &&
          config.JfsWebSocketClient.Path !== null
            ? config.JfsWebSocketClient.Path + path
            : path
        );
      }
      if (host === null) {
        return EMPTY;
      }

      return WSClient.connect(
        host,
        path,
        namespace,
        state$.value.Core.Session.sessionDTO.token,
        state$.value.Core.Session.sessionDTO.lastIPAddress,
        state$.value.Core.Session.sessionDTO.username,
        state$.value.Core.Configuration.config.AppName
      );
    }),
    switchMap(namespace => of(Action.webSocketConnectSuccessAction(namespace)))
  );
};

export default connectRequest;
