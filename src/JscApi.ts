import JscClient from './base/JscClient';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Subject } from 'rxjs';
import { PayloadAction } from 'typesafe-actions';
import { ROOM_UPDATE_ACTION_ID } from './store/action/WebSocketAction';

// This constant is used in the project tools (not in the JFS apps)
export const JSC_API_VERSION: string = '8b4ec5bcef88efaf90ce2c9de8edea35';

namespace JSCApi {
  export interface IUrlParams {
    filter?: string;
    options?: string;
  }

  export interface IJscClientConfig extends AxiosRequestConfig {
    params?: IUrlParams;
  }

  export namespace DTO {

    export namespace App {
      export const I_APP_DTO_FRONTEND_APP_DOCK = 'appDock';
      export const I_APP_DTO_FRONTEND_JFS = 'jfs';

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
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }

    }

    export namespace Authorization {
      export const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READ = '1';
      export const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_WRITE = '2';
      export const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_CREATE = '4';
      export const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_DELETE = '8';
      export const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READWRITE = '3';

      export interface IEntityAttributeAccessDTO {
        entity?: string;
        attribute?: string;
        access?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }

      export interface IPropertyDTO {
        key?: string;
        value?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }

      export interface IUserRightsDTO {
        entityAttributeAccesses?: Array<JSCApi.DTO.Authorization.IEntityAttributeAccessDTO>;
        assignedApps?: Array<JSCApi.DTO.App.IAppDTO>;
      }

    }

    export namespace Login {
      export interface ICredentialsDTO {
        username?: string;
        password?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }

    }

    export namespace Session {
      export interface IFrontendSessionDTO {
        session?: JSCApi.DTO.Session.ISessionDTO;
        appProperties?: Array<JSCApi.DTO.Authorization.IPropertyDTO>;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }

      export interface ISessionDTO {
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

    export namespace WebSocket {
      export interface IWebSocketRoomUpdateDTO<T0> {
        room?: string;
        data?: T0;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }

    }
  }
  export namespace LoginClient {
    export async function loginFrontend(appName: string, credentials: JSCApi.DTO.Login.ICredentialsDTO, config?: IJscClientConfig) {
      return await JscClient.post<JSCApi.DTO.Session.IFrontendSessionDTO>('/session/' + encodeURI(appName) + '', credentials, config);
    }

  }

  export namespace SessionClient {
    export async function getCurrentSessionFrontend(appName: string, config?: IJscClientConfig) {
      return await JscClient.get<JSCApi.DTO.Session.IFrontendSessionDTO>('/session/' + encodeURI(appName) + '', config);
    }

    export async function logout(session: JSCApi.DTO.Session.ISessionDTO, config?: IJscClientConfig) {
      return await JscClient.delete<null>('/session', session, config);
    }

  }

  export namespace SystemClient {
    export async function getRegion(config?: IJscClientConfig) {
      return await JscClient.get<string>('/region', config);
    }

  }

  export namespace UserClient {
    export async function getUserRights(login: string, config?: IJscClientConfig) {
      return await JscClient.get<JSCApi.DTO.Authorization.IUserRightsDTO>('/user/' + encodeURI(login) + '/rights', config);
    }

  }

  export namespace WebSocketClient {
    export const ROOM_PING = 'ping';
    const onRoomUpdatePingSubject = new Subject<string>();
    const onRoomUpdatePing$ = onRoomUpdatePingSubject.asObservable();

    export function onRoomUpdatePing(action: PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<string>>) {
      if (action.type === ROOM_UPDATE_ACTION_ID && action.payload.room === ROOM_PING) {
        onRoomUpdatePingSubject.next(action.payload.data);
      }
      return onRoomUpdatePing$;
    }

  }

}

export default JSCApi;
