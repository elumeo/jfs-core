import { createReducer, PayloadAction } from 'typesafe-actions';
import {
  webSocketAddNamespaceAction,
  webSocketConnectFailedAction,
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketDisconnectSuccessAction,
  webSocketJoinRoomFailureAction,
  webSocketJoinRoomLoadingAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomSuccessAction
} from 'Action/WebSocketAction';

export interface IWebSocketError {
  namespace: string;
  message: string;
}

export interface IWebSocketRoom<T = string> {
  room: string;
  namespace?: string;
  error?: string;
  data?: T;
}

namespace WebSocketConnection {
  export type State = {
    [webSocketNamespace: string]: IWebSocketNamespace;
  }
}

export interface IWebSocketNamespace {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  rooms: IWebSocketRoomConnection[];
}

export const webSocketConnectionReducerInitialState: WebSocketConnection.State = {
  // It is not possible to set initial state values for any namespace here because namespaces will be created
  // dynamically with the action: webSocketAddNamespaceAction
};

export interface IWebSocketRoomConnection {
  namespace: string;
  isJoining: boolean;
  hasJoined: boolean;
  name: string;
  error: string;
}

const WebSocketConnection = createReducer(webSocketConnectionReducerInitialState)

  .handleAction(webSocketConnectRequestAction, (state: WebSocketConnection.State, action: PayloadAction<string, string>): WebSocketConnection.State => {
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

  .handleAction(webSocketConnectSuccessAction, (state: WebSocketConnection.State, action: PayloadAction<string, string>): WebSocketConnection.State => {
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

  .handleAction(webSocketConnectFailedAction, (state: WebSocketConnection.State, action: PayloadAction<string, IWebSocketError>): WebSocketConnection.State => {
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

  .handleAction(webSocketDisconnectSuccessAction, (state: WebSocketConnection.State, action: PayloadAction<string, string>): WebSocketConnection.State => {
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
    webSocketJoinRoomLoadingAction,
    webSocketJoinRoomSuccessAction,
    webSocketJoinRoomFailureAction
  ], (state: WebSocketConnection.State, action: PayloadAction<string, IWebSocketRoomConnection>): WebSocketConnection.State => {
    const newRooms: IWebSocketRoomConnection[] = [];
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

  .handleAction(webSocketLeaveRoomSuccessAction, (state: WebSocketConnection.State, action: PayloadAction<string, IWebSocketRoom>): WebSocketConnection.State => {
    const newRooms: IWebSocketRoomConnection[] = [];
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

  .handleAction(webSocketAddNamespaceAction, (state: WebSocketConnection.State, action: PayloadAction<string, string>): WebSocketConnection.State => {
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
