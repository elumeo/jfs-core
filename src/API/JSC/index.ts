import { AxiosResponse } from "axios";
import JscClient from "./Client";
import { Observable, Subject } from "rxjs";
import { PayloadAction } from "typesafe-actions";
import { ROOM_UPDATE_ACTION_ID } from "Constant/WebSocket";
import { IWebSocketRoom } from "Types/WebSocket";
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
    export namespace DebugNotification {
      export interface IMattermostDTO {
        message?: string;
        payload?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    export namespace Login {
      export interface IPublicKeyDTO {
        publicKey?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface ICredentialsDTO {
        username?: string;
        password?: string;
        encryptedPassword?: string;
        token?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    export namespace Session {
      export interface IFrontendSessionDTO {
        session?: DTO.Session.ISessionDTO;
        appProperties?: DTO.Authorization.IPropertyDTO[];
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface ISessionDTO {
        allowedMethods?: string[];
        token?: string;
        username?: string;
        lastIPAddress?: string;
        lastActivity?: string;
        lastHostName?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    export namespace Authorization {
      export interface IPropertyDTO {
        key?: string;
        value?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IUserRightsDTO {
        assignedApps?: DTO.App.IAppDTO[];
      }
    }
    export namespace App {
      export const I_APP_DTO_FRONTEND_APP_DOCK = "appDock";
      export const I_APP_DTO_FRONTEND_JFS = "jfs";
      export interface IAppDTO {
        name?: string;
        description?: string;
        version?: string;
        url?: string;
        iconUrl?: string;
        windowWidth?: number;
        windowHeight?: number;
        fullscreen?: boolean;
        frontend?: string;
        displayName?: string;
        inAppRightsCount?: number;
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
  export namespace DebugNotificationClient {
    export const sendToMattermost = (
      message: DTO.DebugNotification.IMattermostDTO,
      config?: IJscClientConfig
    ): Promise<AxiosResponse<void>> =>
      JscClient.post<void>("/debug/sendToMattermost", message, config);
  }
  export namespace LoginClient {
    export const getLoginPublicKey = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Login.IPublicKeyDTO>> =>
      JscClient.get<DTO.Login.IPublicKeyDTO>("/session-public-key", config);
    export const loginFrontend = (
      appName: string,
      credentials: DTO.Login.ICredentialsDTO,
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Session.IFrontendSessionDTO>> =>
      JscClient.post<DTO.Session.IFrontendSessionDTO>(
        "/session/" +
          encodeURIComponent(
            typeof appName === "number"
              ? (appName as number).toString()
              : appName
          ) +
          "",
        credentials,
        config
      );
  }
  export namespace SessionClient {
    export const getCurrentSessionFrontend = (
      appName: string,
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Session.IFrontendSessionDTO>> =>
      JscClient.get<DTO.Session.IFrontendSessionDTO>(
        "/session/" +
          encodeURIComponent(
            typeof appName === "number"
              ? (appName as number).toString()
              : appName
          ) +
          "",
        config
      );
    export const logout = (
      session: DTO.Session.ISessionDTO,
      config?: IJscClientConfig
    ): Promise<AxiosResponse<void>> =>
      JscClient.delete<void>("/session", session, config);
  }
  export namespace SystemClient {
    export const getRegion = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<string>> =>
      JscClient.get<string>("/region", config);
  }
  export namespace UserClient {
    export const getUserRights = (
      login: string,
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Authorization.IUserRightsDTO>> =>
      JscClient.get<DTO.Authorization.IUserRightsDTO>(
        "/user/" +
          encodeURIComponent(
            typeof login === "number" ? (login as number).toString() : login
          ) +
          "/rights",
        config
      );
  }
  export namespace WebSocketClient {
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
