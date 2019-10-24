import { Observable } from 'rxjs';
import * as SocketIoClient from 'socket.io-client';

import { Socket } from 'socket.io';
import JSCApi from '../JscApi';
import IWebSocketRoomData = JSCApi.DTO.WebSocket.IWebSocketRoomData;

export class WebSocketClient {
  public static EVENT_CONNECT = 'connect';
  public static EVENT_NOT_AUTHORIZED = 'notAuthorized';
  public static EVENT_AUTHENTICATED = 'authenticated';
  public static EVENT_JOIN_ROOM = '[Room] Join';
  public static EVENT_JOINED_ROOM = '[Room] Joined';
  public static EVENT_LEAVE_ROOM = '[Room] Leave';
  public static EVENT_UPDATE_ROOM = '[Room] Update';

  public static socket: Socket;

  public static connect(token: string, ip: string, host: string, namespace: string) {
    console.log('WebSocketClient connect to: ', host, namespace);
    return new Observable<boolean>((observer) => {
      this.socket = SocketIoClient.connect(host + '/' + namespace, {
        query: {token, ip}
      });
      this.socket.on('authenticated', () => {
        observer.next(true);
        observer.complete();
      });
    });
  }

  public static join(room: string) {
    return new Observable<string>((observer) => {
      this.socket.emit(this.EVENT_JOIN_ROOM, room);
      this.socket.on(this.EVENT_JOINED_ROOM, (joinedRoom) => {
        if (room === joinedRoom) {
          // this.socket.on(this.EVENT_UPDATE_ROOM, (roomData) => {
          //   console.log(this.EVENT_UPDATE_ROOM, room, roomData);
          //   observer.next(roomData);
          // });
          observer.next(room);
          observer.complete();
        }
      });
    });
  }

  public static listen(room: string) {
    console.log('listen 1');
    return new Observable<IWebSocketRoomData>((observer) => {
      console.log('listen 2');
      if (this.socket) {
        console.log('listen 3');
        this.socket.on(this.EVENT_UPDATE_ROOM, (roomData: IWebSocketRoomData) => {
          console.log('listen 4');
          if (room === roomData.room) {
            console.log(this.EVENT_UPDATE_ROOM, room, roomData);
            observer.next(roomData);
          }
        });
      }
    });
  }
}
