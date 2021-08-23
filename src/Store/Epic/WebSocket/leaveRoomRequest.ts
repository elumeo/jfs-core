import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { WSClient } from 'API/WS/WSClient';
import { Epic } from 'Types/Redux';

const leaveRoomRequest: Epic = action$ => action$.pipe(
  filter(TA.isActionOf(Action.webSocketLeaveRoomRequestAction)),
  concatMap(action => WSClient.leave(action.payload)),
  switchMap(room => of(
    Action.webSocketLeaveRoomSuccessAction(room)
  ))
);

export default leaveRoomRequest;
