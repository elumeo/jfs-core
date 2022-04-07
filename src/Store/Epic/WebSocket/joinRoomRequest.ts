import { filter, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as WebSocket from 'Types/WebSocket';
import { WSClient } from 'API/WS/WSClient';
import { Epic } from 'Types/Redux';

const joinRoomRequest: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketJoinRoomRequestAction)),
    map((action): WebSocket.IWebSocketRoomConnection => ({
      isJoining: true,
      hasJoined: false,
      shouldJoin: true,
      error: null,
      name: WSClient.prepareRoomName(action.payload.room, state$.value),
      namespace: action.payload.namespace
    })),
    switchMap(roomState => of(Action.webSocketJoinRoomLoadingAction(roomState))
    )
  );
};

export default joinRoomRequest;
