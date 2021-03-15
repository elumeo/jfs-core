import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as WebSocket from 'Types/WebSocket';

export type State = {
  [webSocketNamespace: string]: WebSocket.IWebSocketNamespace;
}

export const webSocketConnectionReducerInitialState: State = {
  // It is not possible to set initial state values for any namespace here because namespaces will be created
  // dynamically with the action: webSocketAddNamespaceAction
};

const WebSocketConnection = createReducer(webSocketConnectionReducerInitialState)

  .handleAction(Action.webSocketConnectRequestAction, (state, action) => {
    return {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        isConnecting: true,
        isConnected: false,
        connectionError: null
      }
    };
  })

  .handleAction(Action.webSocketConnectSuccessAction, (state, action) => {
    return {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        isConnecting: false,
        isConnected: true,
        connectionError: null
      }
    };
  })
  .handleAction(Action.webSocketConnectFailedAction, (state, action) => {
    return {
      ...state,
      [action.payload.namespace]: {
        ...state[action.payload.namespace],
        isConnecting: false,
        isConnected: false,
        connectionError: action.payload.message
      }
    };
  })
  .handleAction(Action.webSocketDisconnectSuccessAction, (state, action) => {
    return {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        isConnecting: false,
        isConnected: false,
        connectionError: null,
        rooms: []
      }
    };
  })

  .handleAction([
    Action.webSocketJoinRoomLoadingAction,
    Action.webSocketJoinRoomSuccessAction,
    Action.webSocketJoinRoomFailureAction
  ], (state, action) => {
    const newRooms: WebSocket.IWebSocketRoomConnection[] = [];
    if (state[action.payload.namespace] !== undefined) {
      for (const room of state[action.payload.namespace].rooms) {
        if (room.name !== action.payload.name) {
          newRooms.push(room);
        }
      }
    }
    newRooms.push(action.payload);

    return {
      ...state,
      [action.payload.namespace]: {
        ...state[action.payload.namespace],
        rooms: newRooms
      }
    };
  })

  .handleAction(Action.webSocketLeaveRoomSuccessAction, (state, action) => {
    const newRooms: WebSocket.IWebSocketRoomConnection[] = [];
    for (const room of state[action.payload.namespace].rooms) {
      if (room.name !== action.payload.room) {
        newRooms.push(room);
      } else {
        const newRoom = {
          ...room
        };
        newRoom.hasJoined = false;
        newRoom.isJoining = false;
        newRooms.push(newRoom);
      }
    }
    return {
      ...state,
      [action.payload.namespace]: {
        ...state[action.payload.namespace],
        rooms: newRooms
      }
    }
  })
  .handleAction(Action.webSocketAddNamespaceAction, (state, action) => {
    return {
      ...state,
      [action.payload]: {
        isConnected: false,
        isConnecting: false,
        connectionError: null,
        rooms: []
      }
    }
  })
;

export default WebSocketConnection;
