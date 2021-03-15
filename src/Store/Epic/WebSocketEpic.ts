import { combineEpics } from 'redux-observable';
import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { getRoomConnectionState } from 'Store/Selectors/WebSocketSelectors';
import * as WebSocket from 'Types/WebSocket';
import { WSClient } from 'API/WS/WSClient';
import _ from 'lodash';
import uuid from 'uuid';
import { Epic } from 'Types/Redux';

export const webSocketAppIsInitializedEpic: Epic = (action$, state$) => {
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
        actions.push(Action.webSocketAddNamespaceAction(config.JscWebSocketClient.PrivateNamespace));
        actions.push(Action.webSocketConnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
      }
      if (config.JfsWebSocketClient !== undefined) {
        actions.push(Action.webSocketAddNamespaceAction(config.JfsWebSocketClient.PrivateNamespace));
        actions.push(Action.webSocketConnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
      }
      return actions;
    })
  );
};

export const webSocketConnectRequestEpic: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketConnectRequestAction)),
    filter(() => (
      state$.value.Core.Configuration.loaded &&
      state$.value.Core.Session.isAuthorized
    )),
    concatMap(action => WSClient.leaveAllRooms(
      action.payload,
      state$.value.Core.WebSocketConnection[action.payload].rooms
    )),
    concatMap(namespace => WSClient.disconnect(namespace)),
    concatMap(namespace => {
      let host: string = null;
      const config = state$.value.Core.Configuration.config;
      let path = '/socket.io';
      if (config.JscWebSocketClient !== undefined && namespace === config.JscWebSocketClient.PrivateNamespace) {
        host = config.JscWebSocketClient.Host;
        path = (config.JscWebSocketClient.Path !== undefined && config.JscWebSocketClient.Path !== null) ? config.JscWebSocketClient.Path + path : path;
      } else if (config.JfsWebSocketClient !== undefined && namespace === config.JfsWebSocketClient.PrivateNamespace) {
        host = config.JfsWebSocketClient.Host;
        path = (config.JfsWebSocketClient.Path !== undefined && config.JfsWebSocketClient.Path !== null) ? config.JfsWebSocketClient.Path + path : path;
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
    switchMap(namespace => {
      return of(Action.webSocketConnectSuccessAction(namespace));
    })
  );
};

export const webSocketLogoutEpic: Epic = (action$, state) => {
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

export const webSocketCheckForConnectionErrorEpic: Epic = (action$, state) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketConnectRequestAction)),
    concatMap(() => WSClient.connectionErrorObservable$),
    switchMap((err) => {
        if (state.value.Core.WebSocketConnection[err.namespace].isConnecting) {
          return of(
            Action.addNotification({
              id: uuid(),
              content: (
                'Unable to connect to websocket server (' + err.namespace + ')'
                + (err.message !== null && err.message !== ''
                  ? ' because of ' + err.message
                  : '')
                + '!'
              ),
            }),
            Action.webSocketConnectFailedAction(err)
          );
        }

        return EMPTY;
      }
    )
  );
};

export const webSocketCheckForReconnectEpic: Epic = action$ => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketConnectRequestAction)),
    concatMap(() => WSClient.reconnectObservable$),
    switchMap(namespace => of(Action.webSocketConnectSuccessAction(namespace)))
  );
};

export const webSocketConnectSuccessEpic: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketConnectSuccessAction)),
    switchMap((action) => {
      // Filter configRooms against information in state (hasJoined true/false)
      let configRooms: string[] = [];
      const config = state$.value.Core.Configuration.config;
      if (config.JscWebSocketClient !== undefined && action.payload === config.JscWebSocketClient.PrivateNamespace) {
        configRooms = (config.JscWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JscWebSocketClient.AutoRoomSubscriptions;
      }

      if (config.JfsWebSocketClient !== undefined && action.payload === config.JfsWebSocketClient.PrivateNamespace) {
        configRooms = (config.JfsWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JfsWebSocketClient.AutoRoomSubscriptions;
      }

      const stateJoinedRooms: string[] = [];
      const stateLeftRooms: string[] = [];
      for (const stateRoom of state$.value.Core.WebSocketConnection[action.payload].rooms) {
        if (stateRoom.hasJoined) {
          stateJoinedRooms.push(stateRoom.name);
        } else {
          stateLeftRooms.push(stateRoom.name);
        }
      }

      const cleanedConfigRooms: string[] = [];
      for (const configRoom of configRooms) {
        const preparedConfigRoom = WSClient.prepareRoomName(configRoom, state$.value);
        let foundInLeftRoom = false;
        for (const leftRoom of stateLeftRooms) {
          if (preparedConfigRoom === leftRoom) {
            foundInLeftRoom = true;
            break;
          }
        }

        if (foundInLeftRoom === false) {
          cleanedConfigRooms.push(preparedConfigRoom);
        }
      }
      let mergedRooms: string[] = _.uniq([...cleanedConfigRooms, ...stateJoinedRooms]);
      const roomActions: TA.PayloadAction<string, WebSocket.IWebSocketRoom>[] = [];
      for (const room of mergedRooms) {
        const roomData = {
          namespace: action.payload,
          room
        } as WebSocket.IWebSocketRoom;
        roomActions.push(Action.webSocketJoinRoomRequestAction(roomData));
      }
      return roomActions;
    })
  );
};

export const webSocketDisconnectRequestEpic: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketDisconnectRequestAction)),
    filter((action) => Boolean(state$.value.Core.WebSocketConnection[action.payload])),
    concatMap((action) => WSClient.leaveAllRooms(
      action.payload, state$.value.Core.WebSocketConnection[action.payload].rooms
    )),
    concatMap(namespace => WSClient.disconnect(namespace)),
    switchMap(namespace => of(
      Action.webSocketDisconnectSuccessAction(namespace)
    ))
  );
};

export const webSocketJoinRoomRequestEpic: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketJoinRoomRequestAction)),
    map(action => {
      return {
        isJoining: true,
        hasJoined: false,
        error: null,
        name: WSClient.prepareRoomName(
          action.payload.room,
          state$.value
        ),
        namespace: action.payload.namespace
      } as WebSocket.IWebSocketRoomConnection;
    }),
    switchMap((roomState) => of(Action.webSocketJoinRoomLoadingAction(roomState)))
  );
};

export const webSocketJoinRoomLoadingEpic: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketJoinRoomLoadingAction)),
    concatMap((action) => {
      return WSClient.join(action.payload.namespace, action.payload.name).pipe(
        map((room) => {
          let roomState = getRoomConnectionState(
            state$.value.Core.WebSocketConnection,
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
              error: true
            })
          );
        })
      );
    })
  );
};

export const webSocketLeaveRoomRequestEpic: Epic = action$ => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketLeaveRoomRequestAction)),
    concatMap(action => WSClient.leave(action.payload)),
    switchMap(room => of(
      Action.webSocketLeaveRoomSuccessAction(room)
    ))
  );
};

export default combineEpics(
  webSocketAppIsInitializedEpic,
  webSocketConnectRequestEpic,
  webSocketConnectSuccessEpic,
  webSocketJoinRoomRequestEpic,
  webSocketJoinRoomLoadingEpic,
  webSocketLeaveRoomRequestEpic,
  webSocketLogoutEpic,
  webSocketDisconnectRequestEpic,
  webSocketCheckForConnectionErrorEpic,
  webSocketCheckForReconnectEpic,
);
