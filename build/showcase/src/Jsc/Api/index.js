import { Subject } from "rxjs";
import { ROOM_UPDATE_ACTION_ID } from "@elumeo/jfs-core/build/Store/Action/WebSocketAction";
var JSCApi;
(function (JSCApi) {
    let DTO;
    (function (DTO) {
        let Game;
        (function (Game) {
            Game.I_GAME_DTO_STATUS_PLANNED = "planned";
            Game.I_GAME_DTO_STATUS_PREPARED = "prepared";
            Game.I_GAME_DTO_STATUS_STARTING = "starting";
            Game.I_GAME_DTO_STATUS_RUNNING = "running";
            Game.I_GAME_DTO_STATUS_ENDED = "ended";
            Game.I_GAME_DTO_STATUS_CLOSED = "closed";
            Game.I_GAME_DTO_STATUS_CLEANUP_CLOSED = "cleanupClosed";
            Game.I_GAME_DTO_STATUS_CANCELLED = "cancelled";
            Game.I_GAME_DTO_STATUS_KILLED = "killed";
            Game.I_GAME_DTO_GAME_MODE_NORMAL = "normal";
            Game.I_GAME_DTO_GAME_MODE_ONDEMAND = "ondemand";
            Game.I_GAME_DTO_GAME_MODE_MULTISIZE = "multisize";
            Game.I_GAME_DTO_GAME_TYPE_SINGLE_VARIANT = "singleVariant";
            Game.I_GAME_DTO_GAME_TYPE_ONDEMAND = "ondemand";
            Game.I_GAME_DTO_GAME_TYPE_MULTI_VARIANT = "multiVariant";
            Game.I_GAME_DTO_GAME_TYPE_MULTI_CREATION = "multiCreation";
            Game.I_GAME_DTO_GAME_TYPE_MULTI_PRODUCT = "multiProduct";
            Game.I_GAME_DTO_SALE_MODE_DEFAULT = "default";
            Game.I_GAME_DTO_SALE_MODE_RETAIL = "retail";
            Game.I_GAME_DTO_BID_STATUS_ENABLED = "enabled";
            Game.I_GAME_DTO_BID_STATUS_DISABLED = "disabled";
        })(Game = DTO.Game || (DTO.Game = {}));
    })(DTO = JSCApi.DTO || (JSCApi.DTO = {}));
    let WebSocketClient;
    (function (WebSocketClient) {
        WebSocketClient.ROOM_CURRENT_GAME = {
            namespace: "Jsc2Jfs",
            room: "currentGame",
        };
        const onRoomUpdateCurrentGameSubject = new Subject();
        const onRoomUpdateCurrentGame$ = onRoomUpdateCurrentGameSubject.asObservable();
        WebSocketClient.onRoomUpdateCurrentGame = function (action) {
            if (action.type === ROOM_UPDATE_ACTION_ID &&
                action.payload.room === WebSocketClient.ROOM_CURRENT_GAME.room) {
                onRoomUpdateCurrentGameSubject.next(action.payload.data);
            }
            return onRoomUpdateCurrentGame$;
        };
        WebSocketClient.ROOM_PING = {
            namespace: "Jsc2Jfs",
            room: "ping",
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