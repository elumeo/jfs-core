import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';
import { PayloadAction } from 'typesafe-actions';
import JSCApi from '../JscApi';
import { IWebSocketRoom, IWebSocketRoomConnection } from '../store/reducer/WebSocketConnectionReducer';
import IWebSocketRoomUpdateDTO = JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO;
import { ROOM_UPDATE_ACTION_ID } from '../store/action/WebSocketAction';

export class WSClient {
  public static EVENT_NOT_AUTHORIZED = 'notAuthorized';
  public static EVENT_AUTHENTICATED = 'authenticated';
  public static EVENT_JOIN_ROOM = '[Room] Join';
  public static EVENT_JOINED_ROOM = '[Room] Joined';
  public static EVENT_JOIN_ROOM_FAILED = '[Room] Join Failed';
  public static EVENT_LEAVE_ROOM = '[Room] Leave';
  public static EVENT_UPDATE_ROOM = '[Room] Update';
  public static EVENT_CONNECT_ERROR = 'connect_error';
  public static EVENT_RECONNECT = 'reconnect';

  public static sockets: typeof io.Socket[] = [];

  protected static listenRoomsSubject = new Subject<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
  public static listenRoomsObservable$ = WSClient.listenRoomsSubject.asObservable();

  protected static connectionErrorSubject = new Subject<string>();
  public static connectionErrorObservable$ = WSClient.connectionErrorSubject.asObservable();

  protected static reconnectSubject = new Subject<string>();
  public static reconnectObservable$ = WSClient.reconnectSubject.asObservable();

  protected static JFS_NAMESPACE = 'Jfs2Jfs';
  protected static jfsOnRoomUpdateSubject = new Subject<string>();
  protected static jfsOnRoomUpdate$ = WSClient.jfsOnRoomUpdateSubject.asObservable();

  public static connect(host: string, namespace: string, token?: string, ip?: string, ) {
    this.checkSocket(namespace);
    return new Observable<string>((observer) => {
      if (this.sockets[namespace] !== null) {
        this.disconnect(namespace).subscribe();
      }

      if (this.sockets[namespace] === null) {
        this.sockets[namespace] = io.connect(host + '/' + namespace, {
          query: {token, ip},
          secure: host.startsWith('https')
        });
        this.sockets[namespace].on(this.EVENT_AUTHENTICATED, () => {
          this.sockets[namespace].off(this.EVENT_AUTHENTICATED);
          this.sockets[namespace].on(this.EVENT_UPDATE_ROOM, (roomData) => this.listenRoomsSubject.next(roomData));
          observer.next(namespace);
          observer.complete();
        });

        this.sockets[namespace].on(this.EVENT_CONNECT_ERROR, () => {
          this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
          this.connectionErrorSubject.next(namespace);
        });

        this.sockets[namespace].on(this.EVENT_RECONNECT, () => {
          this.sockets[namespace].on(this.EVENT_UPDATE_ROOM, (roomData) => this.listenRoomsSubject.next(roomData));
          this.reconnectSubject.next(namespace);
        });
      }
    });
  }

  public static disconnect(namespace: string) {
    this.checkSocket(namespace);
    return new Observable<string>((observer) => {
      if (this.sockets[namespace] !== null) {
        this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
        this.sockets[namespace].disconnect();
        this.sockets[namespace] = null;
      }
      observer.next(namespace);
      observer.complete();
    });
  }

  public static join(namespace: string, room: string) {
    this.checkSocket(namespace);
    return new Observable<string>((observer) => {
      // 1. Tell websocket server that we joined the room
      this.sockets[namespace].emit(this.EVENT_JOIN_ROOM, room);

      // 2.a Wait for successful join
      this.sockets[namespace].on(this.EVENT_JOINED_ROOM, (joinedRoom) => {
        if (room === joinedRoom) {
          this.sockets[namespace].off(this.EVENT_JOIN_ROOM_FAILED);
          this.sockets[namespace].off(this.EVENT_JOINED_ROOM);
          observer.next(room);
          observer.complete();
          observer.unsubscribe();
        }
      });

      // 2.b Wait for failed join
      this.sockets[namespace].on(this.EVENT_JOIN_ROOM_FAILED, (error) => {
        const failedRoom = (JSON.parse(error.config.data) as IWebSocketRoom);
        if (room === failedRoom.room) {
          failedRoom.error = error.message;
          failedRoom.namespace = namespace;
          this.sockets[namespace].off(this.EVENT_JOIN_ROOM_FAILED);
          this.sockets[namespace].off(this.EVENT_JOINED_ROOM);
          observer.error(failedRoom);
          observer.complete();
          observer.unsubscribe();
        }
      });
    });
  }

  public static leave(room: IWebSocketRoom) {
    this.checkSocket(room.namespace);
    return new Observable<IWebSocketRoom>((observer) => {
      if(this.sockets[room.namespace] !== null) {
        this.sockets[room.namespace].emit(this.EVENT_LEAVE_ROOM, room.room);
      }
      observer.next(room);
      observer.complete();
    });
  }

  public static leaveAllRooms(namespace: string, rooms: IWebSocketRoomConnection[]) {
    this.checkSocket(namespace);
    return new Observable<string>((observer) => {
      let countLeftRooms = 0;
      if (rooms.length === 0) {
        observer.next(namespace);
        observer.complete();
      } else {
        for (const room of rooms) {
          const roomData = {
            namespace: room.namespace,
            room: room.name
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

  public static listenToJfs(action: PayloadAction<string, IWebSocketRoomUpdateDTO<string>>, roomToCheck) {
    // if (action.type === ROOM_UPDATE_ACTION_ID) {
    //   console.log('listenToJfs', roomToCheck, action.payload.room, action.payload.namespace, action.payload.data);
    // }
    if (action.type === ROOM_UPDATE_ACTION_ID && action.payload.room === roomToCheck && action.payload.namespace === WSClient.JFS_NAMESPACE) {
      WSClient.jfsOnRoomUpdateSubject.next(action.payload.data);
    }
    return WSClient.jfsOnRoomUpdate$;
  }

  private static checkSocket(namespace: string) {
    if(this.sockets[namespace] === undefined) {
      this.sockets[namespace] = null;
    }
  }
}
