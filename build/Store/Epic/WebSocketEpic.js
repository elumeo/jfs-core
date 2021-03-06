import { combineEpics } from 'redux-observable';
import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { webSocketConnectFailedAction, webSocketConnectRequestAction, webSocketConnectSuccessAction, webSocketJoinRoomRequestAction, webSocketJoinRoomLoadingAction, webSocketJoinRoomSuccessAction, webSocketLeaveRoomRequestAction, webSocketLeaveRoomSuccessAction, webSocketJoinRoomFailureAction, webSocketDisconnectRequestAction, webSocketDisconnectSuccessAction, webSocketAddNamespaceAction } from '../Action/WebSocketAction';
import { getRoomConnectionState } from '../Selectors/WebSocketSelectors';
import { addNotificationAction } from '../Action/NotificationAction';
import { authorizeSession, logout } from '../Action/SessionAction';
import { WSClient } from '../../Base/WSClient';
import _ from 'lodash';
export const webSocketAppIsInitializedEpic = (action$, state$) => {
    return action$.pipe(filter(isActionOf(authorizeSession)), filter(() => (state$.value.Core.Configuration.loaded &&
        state$.value.Core.Session.isAuthorized)), switchMap(() => {
        const actions = [];
        const config = state$.value.Core.Configuration.config;
        if (config.JscWebSocketClient !== undefined) {
            actions.push(webSocketAddNamespaceAction(config.JscWebSocketClient.PrivateNamespace));
            actions.push(webSocketConnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
        }
        if (config.JfsWebSocketClient !== undefined) {
            actions.push(webSocketAddNamespaceAction(config.JfsWebSocketClient.PrivateNamespace));
            actions.push(webSocketConnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
        }
        return actions;
    }));
};
export const webSocketConnectRequestEpic = (action$, state$) => {
    return action$.pipe(filter(isActionOf(webSocketConnectRequestAction)), filter(() => state$.value.Core.Configuration.loaded && state$.value.Core.Session.isAuthorized), concatMap((action) => WSClient.leaveAllRooms(action.payload, state$.value.Core.WebSocketConnection[action.payload].rooms)), concatMap((namespace) => WSClient.disconnect(namespace)), concatMap((namespace) => {
        let host = null;
        const config = state$.value.Core.Configuration.config;
        let path = '/socket.io';
        if (config.JscWebSocketClient !== undefined && namespace === config.JscWebSocketClient.PrivateNamespace) {
            host = config.JscWebSocketClient.Host;
            path = (config.JscWebSocketClient.Path !== undefined && config.JscWebSocketClient.Path !== null) ? config.JscWebSocketClient.Path + path : path;
        }
        else if (config.JfsWebSocketClient !== undefined && namespace === config.JfsWebSocketClient.PrivateNamespace) {
            host = config.JfsWebSocketClient.Host;
            path = (config.JfsWebSocketClient.Path !== undefined && config.JfsWebSocketClient.Path !== null) ? config.JfsWebSocketClient.Path + path : path;
        }
        if (host === null) {
            return EMPTY;
        }
        return WSClient.connect(host, path, namespace, state$.value.Core.Session.sessionDTO.token, state$.value.Core.Session.sessionDTO.lastIPAddress, state$.value.Core.Session.sessionDTO.username, state$.value.Core.Configuration.config.AppName);
    }), switchMap((namespace) => {
        return of(webSocketConnectSuccessAction(namespace));
    }));
};
export const webSocketLogoutEpic = (action$, state) => {
    return action$.pipe(filter(isActionOf(logout)), 
    // filter(() => (state.value.configReducer.config.JscWebSocketClient !== undefined && state.value.configReducer.loaded)),
    switchMap(() => {
        const disconnectRequestActions = [];
        const config = state.value.Core.Configuration.config;
        if (config.JscWebSocketClient !== undefined) {
            disconnectRequestActions.push(webSocketDisconnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
        }
        if (config.JfsWebSocketClient !== undefined) {
            disconnectRequestActions.push(webSocketDisconnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
        }
        return disconnectRequestActions;
        // return of(webSocketDisconnectRequestAction(WS_NAMESPACES.JSC2JFS), webSocketDisconnectRequestAction(WS_NAMESPACES.JFS2JFS))
    }));
};
export const webSocketCheckForConnectionErrorEpic = (action$, state) => {
    return action$.pipe(filter(isActionOf(webSocketConnectRequestAction)), concatMap(() => WSClient.connectionErrorObservable$), switchMap((err) => {
        if (state.value.Core.WebSocketConnection[err.namespace].isConnecting) {
            return of(addNotificationAction({
                message: 'Unable to connect to websocket server (' + err.namespace + ')' + (err.message !== null && err.message !== '' ? ' because of ' + err.message : '') + '!', isError: true
            }), webSocketConnectFailedAction(err));
        }
        return EMPTY;
    }));
};
export const webSocketCheckForReconnectEpic = action$ => {
    return action$.pipe(filter(isActionOf(webSocketConnectRequestAction)), concatMap(() => WSClient.reconnectObservable$), switchMap((namespace) => of(webSocketConnectSuccessAction(namespace))));
};
export const webSocketConnectSuccessEpic = (action$, state$) => {
    return action$.pipe(filter(isActionOf(webSocketConnectSuccessAction)), switchMap((action) => {
        // Filter configRooms against information in state (hasJoined true/false)
        let configRooms = [];
        const config = state$.value.Core.Configuration.config;
        if (config.JscWebSocketClient !== undefined && action.payload === config.JscWebSocketClient.PrivateNamespace) {
            configRooms = (config.JscWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JscWebSocketClient.AutoRoomSubscriptions;
        }
        if (config.JfsWebSocketClient !== undefined && action.payload === config.JfsWebSocketClient.PrivateNamespace) {
            configRooms = (config.JfsWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JfsWebSocketClient.AutoRoomSubscriptions;
        }
        const stateJoinedRooms = [];
        const stateLeftRooms = [];
        for (const stateRoom of state$.value.Core.WebSocketConnection[action.payload].rooms) {
            if (stateRoom.hasJoined) {
                stateJoinedRooms.push(stateRoom.name);
            }
            else {
                stateLeftRooms.push(stateRoom.name);
            }
        }
        const cleanedConfigRooms = [];
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
        let mergedRooms = _.uniq([...cleanedConfigRooms, ...stateJoinedRooms]);
        const roomActions = [];
        for (const room of mergedRooms) {
            const roomData = {
                namespace: action.payload,
                room
            };
            roomActions.push(webSocketJoinRoomRequestAction(roomData));
        }
        return roomActions;
    }));
};
export const webSocketDisconnectRequestEpic = (action$, state$) => {
    return action$.pipe(filter(isActionOf(webSocketDisconnectRequestAction)), filter((action) => Boolean(state$.value.Core.WebSocketConnection[action.payload])), concatMap((action) => WSClient.leaveAllRooms(action.payload, state$.value.Core.WebSocketConnection[action.payload].rooms)), concatMap((namespace) => WSClient.disconnect(namespace)), switchMap((namespace) => of(webSocketDisconnectSuccessAction(namespace))));
};
export const webSocketJoinRoomRequestEpic = (action$, state$) => {
    return action$.pipe(filter(isActionOf(webSocketJoinRoomRequestAction)), map((action) => {
        let roomName = WSClient.prepareRoomName(action.payload.room, state$.value);
        return {
            isJoining: true,
            hasJoined: false,
            error: null,
            name: roomName,
            namespace: action.payload.namespace
        };
    }), switchMap((roomState) => of(webSocketJoinRoomLoadingAction(roomState))));
};
export const webSocketJoinRoomLoadingEpic = (action$, state$) => {
    return action$.pipe(filter(isActionOf(webSocketJoinRoomLoadingAction)), concatMap((action) => {
        return WSClient.join(action.payload.namespace, action.payload.name).pipe(map((room) => {
            const roomObj = {
                room: room,
                namespace: action.payload.namespace
            };
            let roomState = getRoomConnectionState(state$.value.Core.WebSocketConnection, roomObj);
            roomState.isJoining = false;
            roomState.hasJoined = true;
            return roomState;
        }), switchMap((roomState) => of(webSocketJoinRoomSuccessAction(roomState))), catchError((err) => {
            const update = {
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
            return of(webSocketJoinRoomFailureAction(update), addNotificationAction(error));
        }));
    }));
};
export const webSocketLeaveRoomRequestEpic = action$ => {
    return action$.pipe(filter(isActionOf(webSocketLeaveRoomRequestAction)), concatMap((action) => WSClient.leave(action.payload)), switchMap((room) => of(webSocketLeaveRoomSuccessAction(room))));
};
export default combineEpics(webSocketAppIsInitializedEpic, webSocketConnectRequestEpic, webSocketConnectSuccessEpic, webSocketJoinRoomRequestEpic, webSocketJoinRoomLoadingEpic, webSocketLeaveRoomRequestEpic, webSocketLogoutEpic, webSocketDisconnectRequestEpic, webSocketCheckForConnectionErrorEpic, webSocketCheckForReconnectEpic);
//# sourceMappingURL=WebSocketEpic.js.map