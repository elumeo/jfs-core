import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';
import JSCApi from '../JscApi';
import { IWebSocketJoinRoom, IWebSocketRoomConnection } from '../store/reducer/WebSocketConnectionReducer';

export class WSClient {
  public static EVENT_NOT_AUTHORIZED = 'notAuthorized';
  public static EVENT_AUTHENTICATED = 'authenticated';
  public static EVENT_JOIN_ROOM = '[Room] Join';
  public static EVENT_JOINED_ROOM = '[Room] Joined';
  public static EVENT_JOIN_ROOM_FAILED = '[Room] Join Failed';
  public static EVENT_LEAVE_ROOM = '[Room] Leave';
  public static EVENT_UPDATE_ROOM = '[Room] Update';
  public static EVENT_CONNECT_ERROR = 'connect_error';

  public static socket: typeof io.Socket = null;

  protected static listenRoomsSubject = new Subject<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
  public static listenRoomsObservable$ = WSClient.listenRoomsSubject.asObservable();

  protected static connectSubject: Subject<boolean> = null;
  public static connectObservable$: Observable<boolean> = null;

  public static connect(token: string, ip: string, host: string, namespace: string) {
    if(WSClient.connectSubject === null) {
      WSClient.connectSubject = new Subject<boolean>();
      WSClient.connectObservable$ = WSClient.connectSubject.asObservable();
    }

    if (this.socket === null) {
      this.socket = io.connect(host + '/' + namespace, {
        query: {token, ip},
        secure: host.startsWith('https')
      });
      this.socket.on(this.EVENT_AUTHENTICATED, () => {
        this.socket.on(this.EVENT_UPDATE_ROOM, (roomData) => this.listenRoomsSubject.next(roomData));
        WSClient.connectSubject.next(true);
        // observer.complete();
      });
      this.socket.on(this.EVENT_CONNECT_ERROR, () => {
        this.socket.off(this.EVENT_UPDATE_ROOM);
        WSClient.connectSubject.next(false);
        WSClient.connectSubject.complete();
        WSClient.connectSubject = null;
        WSClient.connectObservable$ = null;
      });
    } else {
      WSClient.connectSubject.next(true);
      // observer.complete();
    }

    // return new Observable<boolean>((observer) => {
    //   if (this.socket === null) {
    //     this.socket = io.connect(host + '/' + namespace, {
    //       query: {token, ip},
    //       secure: host.startsWith('https')
    //     });
    //     this.socket.on(this.EVENT_AUTHENTICATED, () => {
    //       this.socket.on(this.EVENT_UPDATE_ROOM, (roomData) => this.listenRoomsSubject.next(roomData));
    //       observer.next(true);
    //       // observer.complete();
    //     });
    //     this.socket.on('connect_error', () => {
    //       this.socket.off(this.EVENT_UPDATE_ROOM);
    //       observer.next(false);
    //       // observer.complete();
    //     });
    //   } else {
    //     observer.next(true);
    //     // observer.complete();
    //   }
    // });
  }

  public static disconnect() {
    if(WSClient.connectSubject !== null) {
      if (this.socket !== null && this.socket.connected) {
        this.socket.off(this.EVENT_UPDATE_ROOM);
        this.socket.off(this.EVENT_CONNECT_ERROR);
        this.socket.off(this.EVENT_AUTHENTICATED);
        this.socket.disconnect();
        this.socket = null;
      }
      WSClient.connectSubject.next(false);
      WSClient.connectSubject.complete();
      WSClient.connectSubject = null; // ToDo: Nicht null setzen sondern bei connect auf isCompleteted prüfen
      WSClient.connectObservable$ = null; // ToDo: Nicht null setzen sondern bei connect auf isCompleteted prüfen
    }

    // return new Observable<boolean>((observer) => {
    //   if (this.socket !== null && this.socket.connected) {
    //     this.socket.disconnect();
    //     this.socket = null;
    //   }
    //   observer.next(true);
    //   observer.complete();
    // });
  }

  public static join(room: string) {
    return new Observable<string>((observer) => {
      // 1. Tell websocket server that we joined the room
      this.socket.emit(this.EVENT_JOIN_ROOM, room);

      // 2.a Wait for successful join
      this.socket.on(this.EVENT_JOINED_ROOM, (joinedRoom) => {
        if(room === joinedRoom) {
          this.socket.off(this.EVENT_JOIN_ROOM_FAILED);
          this.socket.off(this.EVENT_JOINED_ROOM);
          observer.next(room);
          observer.complete();
          observer.unsubscribe();
        }
      });

      // 2.b Wait for failed join
      this.socket.on(this.EVENT_JOIN_ROOM_FAILED, (error) => {
        const failedRoom = (JSON.parse(error.config.data) as IWebSocketJoinRoom);
        if(room === failedRoom.room) {
          failedRoom.error = error.message;
          this.socket.off(this.EVENT_JOIN_ROOM_FAILED);
          this.socket.off(this.EVENT_JOINED_ROOM);
          observer.error(failedRoom);
          observer.complete();
          observer.unsubscribe();
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

  public static leaveAllRooms(rooms: IWebSocketRoomConnection[]) {
    return new Observable<boolean>((observer) => {
      let countLeftRooms = 0;
      if(rooms.length === 0) {
        observer.next(true);
        observer.complete();
      } else {
        for(const room of rooms) {
          this.leave(room.name).subscribe(() => {
            countLeftRooms++;
            if(countLeftRooms === rooms.length) {
              observer.next(true);
              observer.complete();
            }
          });
        }
      }
    });
  }
}
