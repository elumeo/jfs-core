import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from '../../Action';
import { WSClient } from '../../../API/WS/WSClient';
import { v4 as uuid } from 'uuid';
const joinRoomLoading = (action$, state$) => {
    return action$.pipe(filter(TA.isActionOf(Action.webSocketJoinRoomLoadingAction)), concatMap(action => {
        return WSClient.join(action.payload.namespace, action.payload.name).pipe(map(name => {
            var _a;
            const namespace = state$.value.Core.WebSocket[action.payload.namespace];
            const room = ((_a = namespace === null || namespace === void 0 ? void 0 : namespace.rooms) === null || _a === void 0 ? void 0 : _a.find(room => room.name === name)) || null;
            room.isJoining = false;
            room.hasJoined = true;
            return room;
        }), switchMap(roomState => of(Action.webSocketJoinRoomSuccessAction(roomState))), catchError(err => {
            const update = {
                name: action.payload.name,
                error: err.error.message,
                hasJoined: false,
                isJoining: false,
                namespace: action.payload.namespace,
            };
            const error = {
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
            return of(Action.webSocketJoinRoomFailureAction(update), Action.addNotification({
                id: uuid(),
                title: 'Error',
                subtitle: 'Join Room (' + action.payload.name + ')',
                content: error.message,
                variant: 'error',
            }));
        }));
    }));
};
export default joinRoomLoading;
