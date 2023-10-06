import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as WebSocket from 'Types/WebSocket';
import { WSClient } from 'API/WS/WSClient';
import { Epic } from 'Types/Redux';
import { AxiosError } from 'axios';

const joinRoomLoading: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketJoinRoomLoadingAction)),
    concatMap(action => {
      return WSClient.join(action.payload.namespace, action.payload.name).pipe(
        map(name => {
          const namespace = state$.value.Core.WebSocket[action.payload.namespace];
          const room = namespace?.rooms?.find(room => room.name === name) || null;
          room.isJoining = false;
          room.hasJoined = true;
          room.shouldJoin = false;
          return room;
        }),
        switchMap(roomState =>
          of(Action.webSocketJoinRoomSuccessAction(roomState)),
        ),
        catchError(err => {
          const update: WebSocket.IWebSocketRoomConnection = {
            name: action.payload.name,
            error: err.error.message,
            hasJoined: false,
            isJoining: false,
            shouldJoin: true,
            namespace: action.payload.namespace,
          };
          const error: AxiosError = {
            response: {
              data: {
                message: err.error.message,
                id: 0,
              },
              headers: null,
              config: err.error.config,
              status: null,
              statusText: err.error.message,
            },
            name: err.error.name,
            config: err.error.config,
            message: err.error.message,
            isAxiosError: true,
            toJSON: () => err.error.message,
          };
          return of(
            Action.webSocketJoinRoomFailureAction(update),
            Action.addNotification({
              title: 'Error',
              subtitle: 'Join Room (' + action.payload.name + ')',
              content: error.message,
              variant: 'error',
            }),
          );
        }),
      );
    }),
  );
};

export default joinRoomLoading;
