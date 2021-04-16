import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from '../../Action';
import { WSClient } from '../../../API/WS/WSClient';
const leaveRoomRequest = action$ => action$.pipe(filter(TA.isActionOf(Action.webSocketLeaveRoomRequestAction)), concatMap(action => WSClient.leave(action.payload)), switchMap(room => of(Action.webSocketLeaveRoomSuccessAction(room))));
export default leaveRoomRequest;
