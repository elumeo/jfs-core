"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSClient = void 0;
/* eslint-disable max-lines */
var rxjs_1 = require("rxjs");
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var WebSocket_1 = require("../../../Constant/WebSocket");
var WSClient = /** @class */ (function () {
    function WSClient() {
    }
    WSClient.connect = function (host, path, namespace, token, ip, username, appName) {
        var _this = this;
        if (appName === undefined || appName === null) {
            appName = 'Unknown (' + window.location.origin + ')';
        }
        if (username === undefined || username === null) {
            username = 'Unknown User';
        }
        this.checkSocket(namespace);
        return new rxjs_1.Observable(function (observer) {
            if (_this.sockets[namespace] !== null) {
                _this.disconnect(namespace).subscribe();
            }
            if (_this.sockets[namespace] === null) {
                _this.sockets[namespace] = socket_io_client_1.default.connect(host + '/' + namespace, {
                    query: { token: token, ip: ip, username: username, appName: appName },
                    secure: host.startsWith('https'),
                    path: path,
                });
                _this.sockets[namespace].on(_this.EVENT_AUTHENTICATED, function () {
                    _this.sockets[namespace].off(_this.EVENT_AUTHENTICATED);
                    _this.sockets[namespace].on(_this.EVENT_UPDATE_ROOM, function (roomData) { return _this.listenRoomsSubject.next(roomData); });
                    observer.next(namespace);
                    observer.complete();
                });
                _this.sockets[namespace].on(_this.EVENT_ERROR, function (err) {
                    _this.sockets[namespace].off(_this.EVENT_UPDATE_ROOM);
                    _this.connectionErrorSubject.next({
                        namespace: namespace,
                        message: err,
                    });
                });
                _this.sockets[namespace].on(_this.EVENT_CONNECT_ERROR, function (err) {
                    _this.sockets[namespace].off(_this.EVENT_UPDATE_ROOM);
                    _this.connectionErrorSubject.next({
                        namespace: namespace,
                        message: err,
                    });
                });
                _this.sockets[namespace].on(_this.EVENT_CONNECT_TIMEOUT, function (err) {
                    _this.sockets[namespace].off(_this.EVENT_UPDATE_ROOM);
                    _this.connectionErrorSubject.next({
                        namespace: namespace,
                        message: err,
                    });
                });
                _this.sockets[namespace].on(_this.EVENT_RECONNECT, function () {
                    _this.sockets[namespace].on(_this.EVENT_UPDATE_ROOM, function (roomData) { return _this.listenRoomsSubject.next(roomData); });
                    _this.reconnectSubject.next(namespace);
                });
            }
        });
    };
    WSClient.disconnect = function (namespace) {
        var _this = this;
        this.checkSocket(namespace);
        return new rxjs_1.Observable(function (observer) {
            if (_this.sockets[namespace] !== null) {
                _this.sockets[namespace].off(_this.EVENT_UPDATE_ROOM);
                _this.sockets[namespace].disconnect();
                _this.sockets[namespace] = null;
            }
            observer.next(namespace);
            observer.complete();
        });
    };
    WSClient.join = function (namespace, room) {
        var _this = this;
        this.checkSocket(namespace);
        return new rxjs_1.Observable(function (observer) {
            // 1. Tell websocket server that we joined the room
            _this.sockets[namespace].emit(_this.EVENT_JOIN_ROOM, room);
            // 2.a Wait for successful join
            _this.sockets[namespace].on(_this.EVENT_JOINED_ROOM, function (joinedRoom) {
                if (room === joinedRoom) {
                    _this.sockets[namespace].off(_this.EVENT_JOIN_ROOM_FAILED);
                    _this.sockets[namespace].off(_this.EVENT_JOINED_ROOM);
                    observer.next(room);
                    observer.complete();
                    observer.unsubscribe();
                }
            });
            // 2.b Wait for failed join
            _this.sockets[namespace].on(_this.EVENT_JOIN_ROOM_FAILED, function (error) {
                var failedRoom = JSON.parse(error.config.data);
                if (room === failedRoom.room) {
                    failedRoom.error = error;
                    failedRoom.namespace = namespace;
                    _this.sockets[namespace].off(_this.EVENT_JOIN_ROOM_FAILED);
                    _this.sockets[namespace].off(_this.EVENT_JOINED_ROOM);
                    observer.error(failedRoom);
                    observer.complete();
                    observer.unsubscribe();
                }
            });
        });
    };
    WSClient.leave = function (room) {
        var _this = this;
        this.checkSocket(room.namespace);
        return new rxjs_1.Observable(function (observer) {
            if (_this.sockets[room.namespace] !== null) {
                _this.sockets[room.namespace].emit(_this.EVENT_LEAVE_ROOM, room.room);
            }
            observer.next(room);
            observer.complete();
        });
    };
    WSClient.leaveAllRooms = function (namespace, rooms) {
        var _this = this;
        this.checkSocket(namespace);
        return new rxjs_1.Observable(function (observer) {
            var countLeftRooms = 0;
            if (rooms.length === 0) {
                observer.next(namespace);
                observer.complete();
            }
            else {
                for (var _i = 0, rooms_1 = rooms; _i < rooms_1.length; _i++) {
                    var room = rooms_1[_i];
                    var roomData = {
                        namespace: room.namespace,
                        room: room.name,
                    };
                    _this.leave(roomData).subscribe(function () {
                        countLeftRooms++;
                        if (countLeftRooms === rooms.length) {
                            observer.next(namespace);
                            observer.complete();
                        }
                    });
                }
            }
        });
    };
    WSClient.listen = function (action, roomToCheck) {
        if (action.type === WebSocket_1.ROOM_UPDATE_ACTION_ID &&
            action.payload.room === roomToCheck.room &&
            action.payload.namespace === roomToCheck.namespace) {
            WSClient.jfsOnRoomUpdateSubject.next(action.payload.data);
        }
        return WSClient.jfsOnRoomUpdate$;
    };
    WSClient.emit = function (room) {
        if (this.sockets[room.namespace] !== null) {
            this.sockets[room.namespace].emit(this.EVENT_UPDATE_ROOM, room);
        }
    };
    WSClient.checkSocket = function (namespace) {
        if (this.sockets[namespace] === undefined) {
            this.sockets[namespace] = null;
        }
    };
    WSClient.prepareRoomName = function (roomName, allReducers) {
        if (allReducers.Core.Session.sessionDTO !== null) {
            roomName = roomName.replace('[userId]', allReducers.Core.Session.sessionDTO.username);
        }
        return roomName;
    };
    WSClient.EVENT_NOT_AUTHORIZED = 'notAuthorized';
    WSClient.EVENT_AUTHENTICATED = 'authenticated';
    WSClient.EVENT_JOIN_ROOM = '[Room] Join';
    WSClient.EVENT_JOINED_ROOM = '[Room] Joined';
    WSClient.EVENT_JOIN_ROOM_FAILED = '[Room] Join Failed';
    WSClient.EVENT_LEAVE_ROOM = '[Room] Leave';
    WSClient.EVENT_UPDATE_ROOM = '[Room] Update';
    WSClient.EVENT_CONNECT_ERROR = 'connect_error';
    WSClient.EVENT_CONNECT_TIMEOUT = 'connect_timeout';
    WSClient.EVENT_ERROR = 'error';
    WSClient.EVENT_RECONNECT = 'reconnect';
    WSClient.sockets = {};
    WSClient.listenRoomsSubject = new rxjs_1.Subject();
    WSClient.listenRoomsObservable$ = WSClient.listenRoomsSubject.asObservable();
    WSClient.connectionErrorSubject = new rxjs_1.Subject();
    WSClient.connectionErrorObservable$ = WSClient.connectionErrorSubject.asObservable();
    WSClient.reconnectSubject = new rxjs_1.Subject();
    WSClient.reconnectObservable$ = WSClient.reconnectSubject.asObservable();
    WSClient.jfsOnRoomUpdateSubject = new rxjs_1.Subject();
    WSClient.jfsOnRoomUpdate$ = WSClient.jfsOnRoomUpdateSubject.asObservable();
    return WSClient;
}());
exports.WSClient = WSClient;
