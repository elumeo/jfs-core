import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
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

  public static socket: Socket;

  protected static joinRoomsSubject = new Subject<string>();
  protected static joinRoomsObserver = WSClient.joinRoomsSubject.asObservable();

  // We need to use our own internal observable pattern because we listen all the time to generic events on websocket side which we never close
  // To handle individual updates per room we have our internal observer architecture in use
  protected static listenRoomsSubject = new Subject<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
  protected static listenRoomsObservable = WSClient.listenRoomsSubject.asObservable();
  protected static listenRoomsSubscriptions: { [key: string]: Subscription } = {};
  protected static listenRoomsObserver: { [key: string]: Subscriber<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>> } = {};

  public static connect(token: string, ip: string, host: string, namespace: string) {
    return new Observable<boolean>((observer) => {
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
      // 1. Tell websocket we left the room so updates will not send to us anymore
      this.socket.emit(this.EVENT_LEAVE_ROOM, room);
      if (this.listenRoomsSubscriptions.hasOwnProperty(room) === true) {
        // 2. Close our internal listeners as well
        this.listenRoomsSubscriptions[room].unsubscribe();
        this.listenRoomsSubscriptions[room] = null;
        this.listenRoomsObserver[room].complete();
        this.listenRoomsObserver[room] = null;
      }
      observer.next(room);
      observer.complete();
    });
  }

  public static listen<T>(room: string) {
    return new Observable<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<T>>((observer) => {
      if (this.socket) {
        // When listening to a room we only need to initialize a new subscription to the websocket observable
        this.listenRoomsSubscriptions[room] = this.listenRoomsObservable.pipe(
          filter((roomData: JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<T>) => roomData.room === room)
        ).subscribe((roomData) => {
          observer.next(roomData as JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<T>);
        });
      }
      this.listenRoomsObserver[room] = observer;
    });
  }
}
