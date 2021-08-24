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

export interface IWebSocketNamespace {
  isConnected: boolean;
  isConnecting: boolean;
  connectionError: string;
  rooms: IWebSocketRoomConnection[];
}

export interface IWebSocketRoomConnection {
  namespace: string;
  isJoining: boolean;
  hasJoined: boolean;
  name: string;
  error: string;
}
