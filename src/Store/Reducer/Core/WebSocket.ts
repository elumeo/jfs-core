import { createReducer, ActionType } from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as Type from 'Types/WebSocket';

export type State = {
  [webSocketNamespace: string]: Type.IWebSocketNamespace;
};

/**
 * It is not possible to set initial state values for any namespace here
 * because namespaces will be created dynamically with the action:
 * webSocketAddNamespaceAction
 */
export const initialState: State = {};

const WebSocket = createReducer<State, ActionType<typeof Action>>(initialState)
  .handleAction(Action.webSocketConnectRequestAction, (state, { payload: namespace }): State => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      isConnecting: true,
      isConnected: false,
      connectionError: null
    }
  }))

  .handleAction(Action.webSocketConnectSuccessAction, (state, { payload: namespace }): State => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      isConnecting: false,
      isConnected: true,
      connectionError: null
    }
  }))
  .handleAction(Action.webSocketConnectFailedAction, (state, { payload: room }): State => ({
    ...state,
    [room.namespace]: {
      ...state[room.namespace],
      isConnecting: false,
      isConnected: false,
      connectionError: room.message,
    }
  }))
  .handleAction(Action.webSocketReconnectAction, (state, { payload: namespace }): State => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      rooms: (state[namespace]?.rooms || [])
        .map(r => ({
          ...r,
          shouldJoin: r.isJoining || r.hasJoined,
          isJoining: false,
          hasJoined: false
        }))
    }
  }))
  .handleAction(Action.webSocketDisconnectSuccessAction, (state, { payload: namespace }): State => ({
    ...state,
    [namespace]: {
      ...state[namespace],
      isConnecting: false,
      isConnected: false,
      connectionError: null,
      rooms: []
    }
  }))
  .handleAction(
    [
      Action.webSocketJoinRoomLoadingAction,
      Action.webSocketJoinRoomSuccessAction,
      Action.webSocketJoinRoomFailureAction
    ],
    (state, { payload: room }): State => ({
      ...state,
      [room.namespace]: {
        ...state[room.namespace],
        rooms: [
          ...(state?.[room.namespace]?.rooms || []).filter(r => r.name !== room.name),
          room
        ]
      }
    }))
  .handleAction(Action.webSocketLeaveRoomSuccessAction, (state, { payload: room }): State => ({
    ...state,
    [room.namespace]: {
      ...state[room.namespace],
      rooms: (state[room.namespace]?.rooms || [])
        .map(r =>
          r.name == room.room
            ? { ...r, hasJoined: false, isJoining: false }
            : r
        ),
    }
  }))
  .handleAction(Action.webSocketAddNamespaceAction, (state, { payload: namespace }): State => ({
    ...state,
    [namespace]: {
      isConnected: false,
      isConnecting: false,
      connectionError: null,
      rooms: []
    }
  }));
export default WebSocket;
