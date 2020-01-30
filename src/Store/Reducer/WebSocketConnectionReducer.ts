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
} from '../Action/WebSocketAction';

export interface IWebSocketRoom<T = string> {
  room: string;
  namespace?: string;
  error?: string;
  data?: T;
}

export interface IWebSocketConnectionReducerState {
  [webSocketNamespace: string]: IWebSocketNamespace;
}

export interface IWebSocketNamespace {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  rooms: IWebSocketRoomConnection[];
}

export const webSocketConnectionReducerInitialState: IWebSocketConnectionReducerState = {
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

export const webSocketConnectionReducer = createReducer(webSocketConnectionReducerInitialState)

  .handleAction(webSocketConnectRequestAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, string>): IWebSocketConnectionReducerState => {
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

  .handleAction(webSocketConnectSuccessAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, string>): IWebSocketConnectionReducerState => {
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

  .handleAction(webSocketConnectFailedAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, string>): IWebSocketConnectionReducerState => {
    return {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        isConnecting: false,
        isConnected: false
      }
    };
  })

  .handleAction(webSocketDisconnectSuccessAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, string>): IWebSocketConnectionReducerState => {
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
  ], (state: IWebSocketConnectionReducerState, action: PayloadAction<string, IWebSocketRoomConnection>): IWebSocketConnectionReducerState => {
    const newRooms: IWebSocketRoomConnection[] = [];
    for (const room of state[action.payload.namespace].rooms) {
      if (room.name !== action.payload.name) {
        newRooms.push(room);
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

  .handleAction(webSocketLeaveRoomSuccessAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, IWebSocketRoom>): IWebSocketConnectionReducerState => {
    console.log('webSocketLeaveRoomSuccessAction', action.payload.namespace);
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

  .handleAction(webSocketAddNamespaceAction, (state: IWebSocketConnectionReducerState, action: PayloadAction<string, string>): IWebSocketConnectionReducerState => {
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
