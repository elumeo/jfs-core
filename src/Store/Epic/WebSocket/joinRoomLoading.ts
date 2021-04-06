import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { getRoomConnectionState } from 'Store/Selector/Core/WebSocket';
import * as WebSocket from 'Types/WebSocket';
import { WSClient } from 'API/WS/WSClient';
import _ from 'lodash';
import uuid from 'uuid';
import { Epic } from 'Types/Redux';

const joinRoomLoading: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketJoinRoomLoadingAction)),
    concatMap((action) => {
      return WSClient.join(action.payload.namespace, action.payload.name).pipe(
        map((room) => {
          let roomState = getRoomConnectionState(
            state$.value.Core.WebSocket,
            {
              room: room,
              namespace: action.payload.namespace
            }
          );
          roomState.isJoining = false;
          roomState.hasJoined = true;
          return roomState;
        }),
        switchMap(roomState => of(
          Action.webSocketJoinRoomSuccessAction(roomState)
        )),
        catchError((err) => {
          const update: WebSocket.IWebSocketRoomConnection = {
            name: action.payload.name,
            error: err.error.message,
            hasJoined: false,
            isJoining: false,
            namespace: action.payload.namespace
          };
          const error = {
            error: {
              response: {
                data: {
                  message: err.error.message,
                  id: 0
                },
                headers: null,
                config: err.error.config,
                status: null,
                statusText: err.error.message
              },
              name: err.error.name,
              config: err.error.config,
              message: err.error.message
            },
            isError: true,
            icon: 'error'
          };
          return of(
            Action.webSocketJoinRoomFailureAction(update),
            Action.addNotification({
              id: uuid(),
              content: JSON.stringify(error, null, 2),
              variant: 'error'
            })
          );
        })
      );
    })
  );
};

export default joinRoomLoading;
