/* eslint-disable max-lines */
import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';
import { PayloadAction } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import {
  IWebSocketError,
  IWebSocketRoom,
  IWebSocketRoomConnection,
} from 'Types/WebSocket';
type IWebSocketRoomUpdateDTO<T> = JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<
  T
>;
import { ROOM_UPDATE_ACTION_ID } from 'Constant/WebSocket';
import { State } from 'Store/Reducer/Global';
import { AxiosError } from 'axios';

export class WSClient {
  public static EVENT_NOT_AUTHORIZED = 'notAuthorized';
  public static EVENT_AUTHENTICATED = 'authenticated';
  public static EVENT_JOIN_ROOM = '[Room] Join';
  public static EVENT_JOINED_ROOM = '[Room] Joined';
  public static EVENT_JOIN_ROOM_FAILED = '[Room] Join Failed';
  public static EVENT_LEAVE_ROOM = '[Room] Leave';
  public static EVENT_UPDATE_ROOM = '[Room] Update';
  public static EVENT_CONNECT_ERROR = 'connect_error';
  public static EVENT_CONNECT_TIMEOUT = 'connect_timeout';
  public static EVENT_ERROR = 'error';
  public static EVENT_RECONNECT = 'reconnect';

  public static sockets: {
    [namespace: string]: typeof io.Socket;
  } = {};

  protected static listenRoomsSubject = new Subject<
    JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<unknown>
  >();
  public static listenRoomsObservable$ = WSClient.listenRoomsSubject.asObservable();

  protected static connectionErrorSubject = new Subject<IWebSocketError>();
  public static connectionErrorObservable$ = WSClient.connectionErrorSubject.asObservable();

  protected static reconnectSubject = new Subject<string>();
  public static reconnectObservable$ = WSClient.reconnectSubject.asObservable();

  protected static jfsOnRoomUpdateSubject = new Subject<unknown>();
  protected static jfsOnRoomUpdate$ = WSClient.jfsOnRoomUpdateSubject.asObservable();

  public static connect (
    host: string,
    path: string,
    namespace: string,
    token?: string,
    ip?: string,
    username?: string,
    appName?: string,
  ): Observable<string> {
    if (appName === undefined || appName === null) {
      appName = 'Unknown (' + window.location.origin + ')';
    }

    if (username === undefined || username === null) {
      username = 'Unknown User';
    }

    this.checkSocket(namespace);
    return new Observable<string>(observer => {
      if (this.sockets[namespace] !== null) {
        this.disconnect(namespace).subscribe();
      }
      if (this.sockets[namespace] === null) {
        this.sockets[namespace] = io.connect(host + '/' + namespace, {
          query: { token, ip, username, appName },
          secure: host.startsWith('https'),
          path: path,
        });
        this.sockets[namespace].on(this.EVENT_AUTHENTICATED, () => {
          this.sockets[namespace].on(
            this.EVENT_UPDATE_ROOM,
            (roomData: unknown) => this.listenRoomsSubject.next(roomData),
          );
          observer.next(namespace);
          observer.complete();
        });

        this.sockets[namespace].on(this.EVENT_ERROR, (err: unknown) => {
          this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
          this.connectionErrorSubject.next({
            namespace,
            message: err as string,
          });
        });

        this.sockets[namespace].on(this.EVENT_CONNECT_ERROR, (err: unknown) => {
          this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
          this.connectionErrorSubject.next({
            namespace,
            message: err as string,
          });
        });

        this.sockets[namespace].on(this.EVENT_CONNECT_TIMEOUT, (err: unknown) => {
            this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
            this.connectionErrorSubject.next({
              namespace,
              message: err as string,
            });
          },
        );

        this.sockets[namespace].on(this.EVENT_RECONNECT, () => {
          this.reconnectSubject.next(namespace);
        });
      }
    });
  }

  public static disconnect (namespace: string): Observable<string> {
    this.checkSocket(namespace);
    return new Observable<string>(observer => {
      if (this.sockets[namespace] !== null) {
        this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
        this.sockets[namespace].disconnect();
        this.sockets[namespace] = null;
      }
      observer.next(namespace);
      observer.complete();
    });
  }

  public static join (namespace: string, room: string): Observable<string> {
    this.checkSocket(namespace);
    return new Observable<string>(observer => {
      // 1. Tell websocket server that we joined the room
      this.sockets[namespace].emit(this.EVENT_JOIN_ROOM, room);

      // 2.a Wait for successful join
      this.sockets[namespace].on(
        this.EVENT_JOINED_ROOM,
        (joinedRoom: string) => {
          if (room === joinedRoom) {
            this.sockets[namespace].off(this.EVENT_JOIN_ROOM_FAILED);
            this.sockets[namespace].off(this.EVENT_JOINED_ROOM);
            observer.next(room);
            observer.complete();
            observer.unsubscribe();
          }
        },
      );

      // 2.b Wait for failed join
      this.sockets[namespace].on(
        this.EVENT_JOIN_ROOM_FAILED,
        (error: unknown) => {
          const failedRoom = JSON.parse(
            (error as AxiosError).config.data,
          ) as IWebSocketRoom;
          if (room === failedRoom.room) {
            failedRoom.error = error as string;
            failedRoom.namespace = namespace;
            this.sockets[namespace].off(this.EVENT_JOIN_ROOM_FAILED);
            this.sockets[namespace].off(this.EVENT_JOINED_ROOM);
            observer.error(failedRoom);
            observer.complete();
            observer.unsubscribe();
          }
        },
      );
    });
  }

  public static leave (room: IWebSocketRoom): Observable<IWebSocketRoom> {
    this.checkSocket(room.namespace);
    return new Observable<IWebSocketRoom>(observer => {
      if (this.sockets[room.namespace] !== null) {
        this.sockets[room.namespace].emit(this.EVENT_LEAVE_ROOM, room.room);
      }
      observer.next(room);
      observer.complete();
    });
  }

  public static leaveAllRooms (
    namespace: string,
    rooms: IWebSocketRoomConnection[],
  ): Observable<string> {
    this.checkSocket(namespace);
    return new Observable<string>(observer => {
      let countLeftRooms = 0;
      if (rooms.length === 0) {
        observer.next(namespace);
        observer.complete();
      }
      else {
        for (const room of rooms) {
          const roomData = {
            namespace: room.namespace,
            room: room.name,
          } as IWebSocketRoom;
          this.leave(roomData).subscribe(() => {
            countLeftRooms++;
            if (countLeftRooms === rooms.length) {
              observer.next(namespace);
              observer.complete();
            }
          });
        }
      }
    });
  }

  public static listen<T> (
    action: PayloadAction<string, IWebSocketRoomUpdateDTO<string>>,
    roomToCheck: IWebSocketRoom<T>,
  ): Observable<T> {
    if (
      action.type === ROOM_UPDATE_ACTION_ID &&
      action.payload.room === roomToCheck.room &&
      action.payload.namespace === roomToCheck.namespace
    ) {
      WSClient.jfsOnRoomUpdateSubject.next(action.payload.data);
    }
    return <Observable<T>>WSClient.jfsOnRoomUpdate$;
  }

  public static emit<T> (room: IWebSocketRoom<T>): void {
    if (this.sockets[room.namespace] !== null) {
      this.sockets[room.namespace].emit(this.EVENT_UPDATE_ROOM, room);
    }
  }

  private static checkSocket (namespace: string) {
    if (this.sockets[namespace] === undefined) {
      this.sockets[namespace] = null;
    }
  }

  public static prepareRoomName (roomName: string, allReducers: State): string {
    if (allReducers.Core.Session.sessionDTO !== null) {
      roomName = roomName.replace(
        '[userId]',
        allReducers.Core.Session.sessionDTO.username,
      );
    }
    return roomName;
  }
}
