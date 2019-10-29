import { Observable } from 'rxjs';
import * as SocketIoClient from 'socket.io-client';

import { Socket } from 'socket.io';
import JSCApi from '../JscApi';
import IWebSocketRoomData = JSCApi.DTO.WebSocket.IWebSocketRoomData;

export class WebSocketClient {
  public static EVENT_NOT_AUTHORIZED = 'notAuthorized';
  public static EVENT_AUTHENTICATED = 'authenticated';
  public static EVENT_JOIN_ROOM = '[Room] Join';
  public static EVENT_JOINED_ROOM = '[Room] Joined';
  public static EVENT_LEAVE_ROOM = '[Room] Leave';
  public static EVENT_UPDATE_ROOM = '[Room] Update';

  public static socket: Socket;

  public static connect(token: string, ip: string, host: string, namespace: string) {
    return new Observable<boolean>((observer) => {
      this.socket = SocketIoClient.connect(host + '/' + namespace, {
        query: {token, ip}
      });
      this.socket.on(this.EVENT_AUTHENTICATED, () => {
        console.log('WebSocketClient connect to: ', host, namespace);
        observer.next(true);
      });
      this.socket.on('connect_error', (error) => {
        observer.next(false);
      });
    });
  }

  public static join(room: string) {
    return new Observable<string>((observer) => {
      this.socket.emit(this.EVENT_JOIN_ROOM, room);
      this.socket.on(this.EVENT_JOINED_ROOM, (joinedRoom) => {
        if(room === joinedRoom) {
          observer.next(room);
          observer.complete();
        }
      });
    });
  }

  public static leave(room: string) {
    return new Observable<string>((observer) => {
      this.socket.emit(this.EVENT_LEAVE_ROOM, room);
      observer.next(room);
      observer.complete();
    });
  }

  public static listen(room: string) {
    return new Observable<IWebSocketRoomData>((observer) => {
      if(this.socket) {
        this.socket.on(this.EVENT_UPDATE_ROOM, (roomData: IWebSocketRoomData) => {
          if(room === roomData.room) {
            observer.next(roomData);
          }
        });
      }
    });
  }
}
