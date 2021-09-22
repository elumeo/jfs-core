import { Observable, Subject } from 'rxjs';
import io from 'socket.io-client';
import { PayloadAction } from 'typesafe-actions';
import JSCApi from '../../../API/JSC';
import { IWebSocketError, IWebSocketRoom, IWebSocketRoomConnection } from '../../../Types/WebSocket';
declare type IWebSocketRoomUpdateDTO<T> = JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<T>;
import { State } from '../../../Store/Reducer/Global';
export declare class WSClient {
    static EVENT_NOT_AUTHORIZED: string;
    static EVENT_AUTHENTICATED: string;
    static EVENT_JOIN_ROOM: string;
    static EVENT_JOINED_ROOM: string;
    static EVENT_JOIN_ROOM_FAILED: string;
    static EVENT_LEAVE_ROOM: string;
    static EVENT_UPDATE_ROOM: string;
    static EVENT_CONNECT_ERROR: string;
    static EVENT_CONNECT_TIMEOUT: string;
    static EVENT_ERROR: string;
    static EVENT_RECONNECT: string;
    static sockets: {
        [namespace: string]: typeof io.Socket;
    };
    protected static listenRoomsSubject: Subject<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<unknown>>;
    static listenRoomsObservable$: Observable<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<unknown>>;
    protected static connectionErrorSubject: Subject<IWebSocketError>;
    static connectionErrorObservable$: Observable<IWebSocketError>;
    protected static reconnectSubject: Subject<string>;
    static reconnectObservable$: Observable<string>;
    protected static jfsOnRoomUpdateSubject: Subject<unknown>;
    protected static jfsOnRoomUpdate$: Observable<unknown>;
    static connect(host: string, path: string, namespace: string, token?: string, ip?: string, username?: string, appName?: string): Observable<string>;
    static disconnect(namespace: string): Observable<string>;
    static join(namespace: string, room: string): Observable<string>;
    static leave(room: IWebSocketRoom): Observable<IWebSocketRoom>;
    static leaveAllRooms(namespace: string, rooms: IWebSocketRoomConnection[]): Observable<string>;
    static listen<T>(action: PayloadAction<string, IWebSocketRoomUpdateDTO<string>>, roomToCheck: IWebSocketRoom<T>): Observable<T>;
    static emit<T>(room: IWebSocketRoom<T>): void;
    private static checkSocket;
    static prepareRoomName(roomName: string, allReducers: State): string;
}
export {};
