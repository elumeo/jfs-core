import JscClient from './base/JscClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { WSClient } from './base/WSClient';
import { Observable } from 'rxjs';

// This constant is used in the project tools (not in the JFS apps)
export const JSC_API_VERSION: string = 'c5090c9fe1c3ea1c1967bed324b2b18a';

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
    export async function login(credentials: JSCApi.DTO.Login.ICredentialsDTO, config?: IJscClientConfig): Promise<AxiosResponse<JSCApi.DTO.Session.ISessionDTO>> {
      return await JscClient.post('/session', credentials, config);
    }

  }

  export namespace SessionClient {
    export async function getCurrentSession(config?: IJscClientConfig): Promise<AxiosResponse<JSCApi.DTO.Session.ISessionDTO>> {
      return await JscClient.get('/session', config);
    }

    export async function logout(session: JSCApi.DTO.Session.ISessionDTO, config?: IJscClientConfig): Promise<AxiosResponse<null>> {
      return await JscClient.delete('/session', session, config);
    }

  }

  export namespace SystemClient {
    export async function getRegion(config?: IJscClientConfig): Promise<AxiosResponse<string>> {
      return await JscClient.get('/region', config);
    }

  }

  export namespace UserClient {
    export async function getUserRights(login: string, config?: IJscClientConfig): Promise<AxiosResponse<JSCApi.DTO.Authorization.IUserRightsDTO>> {
      return await JscClient.get('/user/' + encodeURI(login) + '/rights', config);
    }

  }

  export namespace WebSocketClient {
    export function joinRoomPing(): Observable<string> {
      return WSClient.join('ping');
    }

  }

}

export default JSCApi;
