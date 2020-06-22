var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Subject } from 'rxjs';
import JscClient from './Client';
import { ROOM_UPDATE_ACTION_ID } from '../Store/Action/WebSocketAction';
export const JSC_API_VERSION = '038a3ca371a4e1bc34a2a64035c9a1ae';
var JSCApi;
(function (JSCApi) {
    let DTO;
    (function (DTO) {
        let App;
        (function (App) {
            App.I_APP_DTO_FRONTEND_APP_DOCK = 'appDock';
            App.I_APP_DTO_FRONTEND_JFS = 'jfs';
        })(App = DTO.App || (DTO.App = {}));
        let Authorization;
        (function (Authorization) {
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READ = '1';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_WRITE = '2';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_CREATE = '4';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_DELETE = '8';
            Authorization.I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READWRITE = '3';
        })(Authorization = DTO.Authorization || (DTO.Authorization = {}));
    })(DTO = JSCApi.DTO || (JSCApi.DTO = {}));
    let LoginClient;
    (function (LoginClient) {
        function loginFrontend(appName, credentials, config) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield JscClient.post('/session/' + encodeURI(appName) + '', credentials, config);
            });
        }
        LoginClient.loginFrontend = loginFrontend;
    })(LoginClient = JSCApi.LoginClient || (JSCApi.LoginClient = {}));
    let SessionClient;
    (function (SessionClient) {
        function getCurrentSessionFrontend(appName, config) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield JscClient.get('/session/' + encodeURI(appName) + '', config);
            });
        }
        SessionClient.getCurrentSessionFrontend = getCurrentSessionFrontend;
        function logout(session, config) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield JscClient.delete('/session', session, config);
            });
        }
        SessionClient.logout = logout;
    })(SessionClient = JSCApi.SessionClient || (JSCApi.SessionClient = {}));
    let SystemClient;
    (function (SystemClient) {
        function getRegion(config) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield JscClient.get('/region', config);
            });
        }
        SystemClient.getRegion = getRegion;
    })(SystemClient = JSCApi.SystemClient || (JSCApi.SystemClient = {}));
    let UserClient;
    (function (UserClient) {
        function getUserRights(login, config) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield JscClient.get('/user/' + encodeURI(login) + '/rights', config);
            });
        }
        UserClient.getUserRights = getUserRights;
    })(UserClient = JSCApi.UserClient || (JSCApi.UserClient = {}));
    let WebSocketClient;
    (function (WebSocketClient) {
        WebSocketClient.ROOM_PING = { namespace: 'Jsc2Jfs', room: 'ping' };
        const onRoomUpdatePingSubject = new Subject();
        const onRoomUpdatePing$ = onRoomUpdatePingSubject.asObservable();
        function onRoomUpdatePing(action) {
            if (action.type === ROOM_UPDATE_ACTION_ID && action.payload.room === WebSocketClient.ROOM_PING.room) {
                onRoomUpdatePingSubject.next(action.payload.data);
            }
            return onRoomUpdatePing$;
        }
        WebSocketClient.onRoomUpdatePing = onRoomUpdatePing;
    })(WebSocketClient = JSCApi.WebSocketClient || (JSCApi.WebSocketClient = {}));
})(JSCApi || (JSCApi = {}));
export default JSCApi;
//# sourceMappingURL=Api.js.map