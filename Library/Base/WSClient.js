import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';
import { ROOM_UPDATE_ACTION_ID } from '../Store/Action/WebSocketAction';
export class WSClient {
    static connect(host, path, namespace, token, ip, username, appName) {
        if (appName === undefined || appName === null) {
            appName = 'Unknown (' + window.location.origin + ')';
        }
        if (username === undefined || username === null) {
            username = 'Unknown User';
        }
        this.checkSocket(namespace);
        return new Observable((observer) => {
            if (this.sockets[namespace] !== null) {
                this.disconnect(namespace).subscribe();
            }
            if (this.sockets[namespace] === null) {
                this.sockets[namespace] = io.connect(host + '/' + namespace, {
                    query: { token, ip, username, appName },
                    secure: host.startsWith('https'),
                    path: path
                });
                this.sockets[namespace].on(this.EVENT_AUTHENTICATED, () => {
                    this.sockets[namespace].off(this.EVENT_AUTHENTICATED);
                    this.sockets[namespace].on(this.EVENT_UPDATE_ROOM, (roomData) => this.listenRoomsSubject.next(roomData));
                    observer.next(namespace);
                    observer.complete();
                });
                this.sockets[namespace].on(this.EVENT_ERROR, (err) => {
                    this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
                    this.connectionErrorSubject.next({ namespace, message: err });
                });
                this.sockets[namespace].on(this.EVENT_CONNECT_ERROR, (err) => {
                    this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
                    this.connectionErrorSubject.next({ namespace, message: err });
                });
                this.sockets[namespace].on(this.EVENT_RECONNECT, () => {
                    this.sockets[namespace].on(this.EVENT_UPDATE_ROOM, (roomData) => this.listenRoomsSubject.next(roomData));
                    this.reconnectSubject.next(namespace);
                });
            }
        });
    }
    static disconnect(namespace) {
        this.checkSocket(namespace);
        return new Observable((observer) => {
            if (this.sockets[namespace] !== null) {
                this.sockets[namespace].off(this.EVENT_UPDATE_ROOM);
                this.sockets[namespace].disconnect();
                this.sockets[namespace] = null;
            }
            observer.next(namespace);
            observer.complete();
        });
    }
    static join(namespace, room) {
        this.checkSocket(namespace);
        return new Observable((observer) => {
            this.sockets[namespace].emit(this.EVENT_JOIN_ROOM, room);
            this.sockets[namespace].on(this.EVENT_JOINED_ROOM, (joinedRoom) => {
                if (room === joinedRoom) {
                    this.sockets[namespace].off(this.EVENT_JOIN_ROOM_FAILED);
                    this.sockets[namespace].off(this.EVENT_JOINED_ROOM);
                    observer.next(room);
                    observer.complete();
                    observer.unsubscribe();
                }
            });
            this.sockets[namespace].on(this.EVENT_JOIN_ROOM_FAILED, (error) => {
                const failedRoom = JSON.parse(error.config.data);
                if (room === failedRoom.room) {
                    failedRoom.error = error;
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
    static leave(room) {
        this.checkSocket(room.namespace);
        return new Observable((observer) => {
            if (this.sockets[room.namespace] !== null) {
                this.sockets[room.namespace].emit(this.EVENT_LEAVE_ROOM, room.room);
            }
            observer.next(room);
            observer.complete();
        });
    }
    static leaveAllRooms(namespace, rooms) {
        this.checkSocket(namespace);
        return new Observable((observer) => {
            let countLeftRooms = 0;
            if (rooms.length === 0) {
                observer.next(namespace);
                observer.complete();
            }
            else {
                for (const room of rooms) {
                    const roomData = {
                        namespace: room.namespace,
                        room: room.name
                    };
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
    static listen(action, roomToCheck) {
        if (action.type === ROOM_UPDATE_ACTION_ID && action.payload.room === roomToCheck.room && action.payload.namespace === roomToCheck.namespace) {
            WSClient.jfsOnRoomUpdateSubject.next(action.payload.data);
        }
        return WSClient.jfsOnRoomUpdate$;
    }
    static emit(room) {
        if (this.sockets[room.namespace] !== null) {
            this.sockets[room.namespace].emit(this.EVENT_UPDATE_ROOM, room);
        }
    }
    static checkSocket(namespace) {
        if (this.sockets[namespace] === undefined) {
            this.sockets[namespace] = null;
        }
    }
    static prepareRoomName(roomName, allReducers) {
        if (allReducers.Core.Session.sessionDTO !== null) {
            roomName = roomName.replace('[userId]', allReducers.Core.Session.sessionDTO.username);
        }
        return roomName;
    }
}
WSClient.EVENT_NOT_AUTHORIZED = 'notAuthorized';
WSClient.EVENT_AUTHENTICATED = 'authenticated';
WSClient.EVENT_JOIN_ROOM = '[Room] Join';
WSClient.EVENT_JOINED_ROOM = '[Room] Joined';
WSClient.EVENT_JOIN_ROOM_FAILED = '[Room] Join Failed';
WSClient.EVENT_LEAVE_ROOM = '[Room] Leave';
WSClient.EVENT_UPDATE_ROOM = '[Room] Update';
WSClient.EVENT_CONNECT_ERROR = 'connect_error';
WSClient.EVENT_ERROR = 'error';
WSClient.EVENT_RECONNECT = 'reconnect';
WSClient.sockets = [];
WSClient.listenRoomsSubject = new Subject();
WSClient.listenRoomsObservable$ = WSClient.listenRoomsSubject.asObservable();
WSClient.connectionErrorSubject = new Subject();
WSClient.connectionErrorObservable$ = WSClient.connectionErrorSubject.asObservable();
WSClient.reconnectSubject = new Subject();
WSClient.reconnectObservable$ = WSClient.reconnectSubject.asObservable();
WSClient.jfsOnRoomUpdateSubject = new Subject();
WSClient.jfsOnRoomUpdate$ = WSClient.jfsOnRoomUpdateSubject.asObservable();
//# sourceMappingURL=WSClient.js.map