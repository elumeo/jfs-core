import { Observable, Subject } from "rxjs";
import { PayloadAction } from "typesafe-actions";
import { ROOM_UPDATE_ACTION_ID } from "@elumeo/jfs-core/build/Constant/WebSocket";
import { IWebSocketRoom } from "@elumeo/jfs-core/build/Types/WebSocket";
namespace JSCApi {
  export interface IUrlParams {
    filter?: string;
    options?: string;
    searchString?: string;
  }
  export interface IJscClientConfig {
    params?: IUrlParams;
  }
  export namespace DTO {
    export namespace Game {
      export const I_GAME_DTO_STATUS_PLANNED = "planned";
      export const I_GAME_DTO_STATUS_PREPARED = "prepared";
      export const I_GAME_DTO_STATUS_STARTING = "starting";
      export const I_GAME_DTO_STATUS_RUNNING = "running";
      export const I_GAME_DTO_STATUS_ENDED = "ended";
      export const I_GAME_DTO_STATUS_CLOSED = "closed";
      export const I_GAME_DTO_STATUS_CLEANUP_CLOSED = "cleanupClosed";
      export const I_GAME_DTO_STATUS_CANCELLED = "cancelled";
      export const I_GAME_DTO_STATUS_KILLED = "killed";
      export const I_GAME_DTO_GAME_MODE_NORMAL = "normal";
      export const I_GAME_DTO_GAME_MODE_ONDEMAND = "ondemand";
      export const I_GAME_DTO_GAME_MODE_MULTISIZE = "multisize";
      export const I_GAME_DTO_GAME_TYPE_SINGLE_VARIANT = "singleVariant";
      export const I_GAME_DTO_GAME_TYPE_ONDEMAND = "ondemand";
      export const I_GAME_DTO_GAME_TYPE_MULTI_VARIANT = "multiVariant";
      export const I_GAME_DTO_GAME_TYPE_MULTI_CREATION = "multiCreation";
      export const I_GAME_DTO_GAME_TYPE_MULTI_PRODUCT = "multiProduct";
      export const I_GAME_DTO_SALE_MODE_DEFAULT = "default";
      export const I_GAME_DTO_SALE_MODE_RETAIL = "retail";
      export const I_GAME_DTO_BID_STATUS_ENABLED = "enabled";
      export const I_GAME_DTO_BID_STATUS_DISABLED = "disabled";
      export interface IGameDTO {
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
        version?: number;
        runningFrom?: string;
        runningUntil?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    export namespace WebSocket {
      export interface IWebSocketRoomUpdateDTO<T1> {
        crc?: string;
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
  export namespace WebSocketClient {
    export const ROOM_CURRENT_GAME: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "currentGame",
    };
    const onRoomUpdateCurrentGameSubject = new Subject<DTO.Game.IGameDTO[]>();
    const onRoomUpdateCurrentGame$ =
      onRoomUpdateCurrentGameSubject.asObservable();
    export const onRoomUpdateCurrentGame = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<DTO.Game.IGameDTO[]>
      >
    ): Observable<DTO.Game.IGameDTO[]> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_CURRENT_GAME.room
      ) {
        onRoomUpdateCurrentGameSubject.next(action.payload.data);
      }

      return onRoomUpdateCurrentGame$;
    };
    export const ROOM_PING: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "ping",
    };
    const onRoomUpdatePingSubject = new Subject<string>();
    const onRoomUpdatePing$ = onRoomUpdatePingSubject.asObservable();
    export const onRoomUpdatePing = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<string>
      >
    ): Observable<string> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_PING.room
      ) {
        onRoomUpdatePingSubject.next(action.payload.data);
      }

      return onRoomUpdatePing$;
    };
  }
}
export default JSCApi;
