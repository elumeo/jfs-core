import JscClient from './Client';
import { Subject } from 'rxjs';
import { ROOM_UPDATE_ACTION_ID } from '../../Constant/WebSocket';
var JSCApi;
(function (JSCApi) {
    let DTO;
    (function (DTO) {
        let Authorization;
        (function (Authorization) {
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READ = '1';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_WRITE = '2';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_CREATE = '4';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_DELETE = '8';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READWRITE = '3';
        })(Authorization = DTO.Authorization || (DTO.Authorization = {}));
        let App;
        (function (App) {
            App.I_APP_DTO_FRONTEND_APP_DOCK = 'appDock';
            App.I_APP_DTO_FRONTEND_JFS = 'jfs';
        })(App = DTO.App || (DTO.App = {}));
    })(DTO = JSCApi.DTO || (JSCApi.DTO = {}));
    let LoginClient;
    (function (LoginClient) {
        LoginClient.loginFrontend = (appName, credentials, config) => JscClient.post('/session/' +
            encodeURI(typeof appName === 'number'
                ? appName.toString()
                : appName) +
            '', credentials, config);
    })(LoginClient = JSCApi.LoginClient || (JSCApi.LoginClient = {}));
    let SessionClient;
    (function (SessionClient) {
        SessionClient.getCurrentSessionFrontend = (appName, config) => JscClient.get('/session/' +
            encodeURI(typeof appName === 'number'
                ? appName.toString()
                : appName) +
            '', config);
        SessionClient.logout = (session, config) => JscClient.delete('/session', session, config);
    })(SessionClient = JSCApi.SessionClient || (JSCApi.SessionClient = {}));
    let SystemClient;
    (function (SystemClient) {
        SystemClient.getRegion = (config) => JscClient.get('/region', config);
    })(SystemClient = JSCApi.SystemClient || (JSCApi.SystemClient = {}));
    let UserClient;
    (function (UserClient) {
        UserClient.getUserRights = (login, config) => JscClient.get('/user/' +
            encodeURI(typeof login === 'number' ? login.toString() : login) +
            '/rights', config);
    })(UserClient = JSCApi.UserClient || (JSCApi.UserClient = {}));
    let WebSocketClient;
    (function (WebSocketClient) {
        WebSocketClient.ROOM_PING = {
            namespace: 'Jsc2Jfs',
            room: 'ping',
        };
        const onRoomUpdatePingSubject = new Subject();
        const onRoomUpdatePing$ = onRoomUpdatePingSubject.asObservable();
        WebSocketClient.onRoomUpdatePing = function (action) {
            if (action.type === ROOM_UPDATE_ACTION_ID &&
                action.payload.room === WebSocketClient.ROOM_PING.room) {
                onRoomUpdatePingSubject.next(action.payload.data);
            }
            return onRoomUpdatePing$;
        };
    })(WebSocketClient = JSCApi.WebSocketClient || (JSCApi.WebSocketClient = {}));
})(JSCApi || (JSCApi = {}));
export default JSCApi;
//# sourceMappingURL=index.js.map