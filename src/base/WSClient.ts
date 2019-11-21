import { Observable, Subject } from 'rxjs';
import * as SocketIoClient from 'socket.io-client';

import { Socket } from 'socket.io';
import JSCApi from '../JscApi';
import { filter } from 'rxjs/operators';

export class WSClient {
  public static EVENT_NOT_AUTHORIZED = 'notAuthorized';
  public static EVENT_AUTHENTICATED = 'authenticated';
  public static EVENT_JOIN_ROOM = '[Room] Join';
  public static EVENT_JOINED_ROOM = '[Room] Joined';
  public static EVENT_LEAVE_ROOM = '[Room] Leave';
  public static EVENT_UPDATE_ROOM = '[Room] Update';

  public static socket: Socket = null;

  protected static joinRoomsSubject = new Subject<string>();
  protected static joinRoomsObserver = WSClient.joinRoomsSubject.asObservable();

  protected static listenRoomsSubject = new Subject<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
  public static listenRoomsObservable$ = WSClient.listenRoomsSubject.asObservable();

  public static connect(token: string, ip: string, host: string, namespace: string) {
    return new Observable<boolean>((observer) => {
      if(this.socket === null) {
        this.socket = SocketIoClient.connect(host + '/' + namespace, {
          query: {token, ip},
          secure: host.startsWith('https')
        });
        this.socket.on(this.EVENT_AUTHENTICATED, () => {
          console.log('WebSocketClient connect to: ', host, namespace);
          observer.next(true);

          this.socket.on(this.EVENT_JOINED_ROOM, (joinedRoom) => {
            this.joinRoomsSubject.next(joinedRoom);
          });

          this.socket.on(this.EVENT_UPDATE_ROOM, (roomData) => {
            this.listenRoomsSubject.next(roomData);
          });
        });
        this.socket.on('connect_error', () => {
          observer.next(false);
        });
      } else {
        observer.next(true);
      }
    });
  }

  public static disconnect() {
    return new Observable<boolean>((observer) => {
      if(this.socket !== null && this.socket.connected) {
        this.socket.disconnect();
        this.socket = null;
        observer.next(true);
      } else {
        observer.next(true);
      }
    });
  }

  public static join(room: string) {
    return new Observable<string>((observer) => {
      // 1. Tell websocket server that we joined the room
      this.socket.emit(this.EVENT_JOIN_ROOM, room);
      // 2. When joining a room we only need to initialize a new subscription to the websocket observable to
      // receive the success response
      const subscription = this.joinRoomsObserver.pipe(
        filter((joinedRoom) => joinedRoom === room)
      ).subscribe(() => {
        observer.next(room);
        observer.complete();
        subscription.unsubscribe();
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
}
