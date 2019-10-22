import { Epic, StateObservable } from 'redux-observable';
import { filter, tap, take } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction } from '../action/RootAction';
import { webSocketConnectRequestAction } from '../action/WebSocketAction';
import IRootReducer from '../reducer/RootReducer';

export const WebSocketConnectActionEpic: Epic<RootAction, RootAction> = (action$: RootAction, store: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => store.value.configReducer.loaded),
    filter(() => store.value.sessionReducer.isAuthorized),
    tap(() => console.log('CONNECT TO WEBSOCKET')),
    take(1)
  );
};

// export const websocketJoinRoomEpic: Epic<RootAction, RootAction> = (action$, store) => {
//   return action$.pipe(
//     filter(isActionOf(webSocketJoinRoomAction)),
//     mergeMap((action) => {
//       console.log('JOIN ROOM', action.payload);
//       WebSocketClient.join(action.payload);
//       return of(webSocketRoomJoinedAction(action.payload));
//     })
//   );
// };
