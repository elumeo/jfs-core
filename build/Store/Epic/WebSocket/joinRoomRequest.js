import { filter, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from '../../Action';
import { WSClient } from '../../../API/WS/WSClient';
const joinRoomRequest = (action$, state$) => {
    return action$.pipe(filter(TA.isActionOf(Action.webSocketJoinRoomRequestAction)), map(action => {
        return {
            isJoining: true,
            hasJoined: false,
            error: null,
            name: WSClient.prepareRoomName(action.payload.room, state$.value),
            namespace: action.payload.namespace,
        };
    }), switchMap(roomState => of(Action.webSocketJoinRoomLoadingAction(roomState))));
};
export default joinRoomRequest;
