import { Observable } from "rxjs";
import { PayloadAction } from "typesafe-actions";
import { IWebSocketRoom } from "@elumeo/jfs-core/build/Store/Reducer/Core/WebSocketConnectionReducer";
declare namespace JSCApi {
    interface IUrlParams {
        filter?: string;
        options?: string;
    }
    interface IJscClientConfig {
        params?: IUrlParams;
    }
    namespace DTO {
        namespace Game {
            const I_GAME_DTO_STATUS_PLANNED = "planned";
            const I_GAME_DTO_STATUS_PREPARED = "prepared";
            const I_GAME_DTO_STATUS_STARTING = "starting";
            const I_GAME_DTO_STATUS_RUNNING = "running";
            const I_GAME_DTO_STATUS_ENDED = "ended";
            const I_GAME_DTO_STATUS_CLOSED = "closed";
            const I_GAME_DTO_STATUS_CLEANUP_CLOSED = "cleanupClosed";
            const I_GAME_DTO_STATUS_CANCELLED = "cancelled";
            const I_GAME_DTO_STATUS_KILLED = "killed";
            const I_GAME_DTO_GAME_MODE_NORMAL = "normal";
            const I_GAME_DTO_GAME_MODE_ONDEMAND = "ondemand";
            const I_GAME_DTO_GAME_MODE_MULTISIZE = "multisize";
            const I_GAME_DTO_GAME_TYPE_SINGLE_VARIANT = "singleVariant";
            const I_GAME_DTO_GAME_TYPE_ONDEMAND = "ondemand";
            const I_GAME_DTO_GAME_TYPE_MULTI_VARIANT = "multiVariant";
            const I_GAME_DTO_GAME_TYPE_MULTI_CREATION = "multiCreation";
            const I_GAME_DTO_GAME_TYPE_MULTI_PRODUCT = "multiProduct";
            const I_GAME_DTO_SALE_MODE_DEFAULT = "default";
            const I_GAME_DTO_SALE_MODE_RETAIL = "retail";
            const I_GAME_DTO_BID_STATUS_ENABLED = "enabled";
            const I_GAME_DTO_BID_STATUS_DISABLED = "disabled";
            interface IGameDTO {
                gameType?: string;
                currentPriceInCent?: number;
                endPriceInCent?: number;
                freeDelivery?: boolean;
                gameEndedAt?: string;
                gameMode?: string;
                gameStartedAt?: string;
                id?: string;
                isHighlight?: boolean;
                plannedFor?: string;
                presenter?: string;
                producer?: string;
                productId?: string;
                quantityAtStart?: number;
                quantityCurrent?: number;
                pretendedQuantityAtStart?: number;
                remark?: string;
                specialBrand?: string;
                specialGuest?: string;
                startPriceInCent?: number;
                status?: string;
                startId?: number;
                showGame?: string;
                articleId?: string;
                runtimeEntryId?: string;
                saleMode?: string;
                shift?: number;
                bidStatus?: string;
                isProductBundle?: boolean;
                relatedProductIds?: string[];
                productBundleIdentifier?: string;
                planer?: string;
                withRemoteStock?: boolean;
                showSpecial?: string;
                isRobotGame?: boolean;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace WebSocket {
            interface IWebSocketRoomUpdateDTO<T1> {
                room?: string;
                namespace?: string;
                data?: T1;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
    }
    namespace WebSocketClient {
        const ROOM_CURRENT_GAME: IWebSocketRoom;
        const onRoomUpdateCurrentGame: (action: PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<JSCApi.DTO.Game.IGameDTO[]>>) => Observable<JSCApi.DTO.Game.IGameDTO[]>;
        const ROOM_PING: IWebSocketRoom;
        const onRoomUpdatePing: (action: PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<string>>) => Observable<string>;
    }
}
export default JSCApi;
