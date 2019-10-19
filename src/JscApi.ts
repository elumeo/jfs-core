import client from './base/Client';
import { AxiosResponse } from 'axios';

// This constant is used in the project tools (not in the JFS apps)
export const JSC_API_VERSION: string = '77ac03749e8d3d5e9d3242f603dc3207';

namespace JSCApi {

  export interface IUrlParams {
    filter?: string;
    options?: string;
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

  }

  export namespace LoginClient {

    export async function login(credentials: JSCApi.DTO.Login.ICredentialsDTO, params?: IUrlParams): Promise<AxiosResponse<JSCApi.DTO.Session.ISessionDTO>> {
      return await client.post(`/session`, credentials, {params: params});
    }

  }

  export namespace SessionClient {

    export async function getCurrentSession(params?: IUrlParams): Promise<AxiosResponse<JSCApi.DTO.Session.ISessionDTO>> {
      return await client.get(`/session`, {params: params});
    }

    export async function logout(session: JSCApi.DTO.Session.ISessionDTO, params?: IUrlParams): Promise<AxiosResponse<null>> {
      return await client.delete(`/session`, session, {params: params});
    }

  }

  export namespace SystemClient {

    export async function getRegion(params?: IUrlParams): Promise<AxiosResponse<string>> {
      return await client.get(`/region`, {params: params});
    }

  }

  export namespace UserClient {

    export async function getUserRights(login: string, params?: IUrlParams): Promise<AxiosResponse<JSCApi.DTO.Authorization.IUserRightsDTO>> {
      return await client.get(`/user/${encodeURI(login)}/rights`, {params: params});
    }

  }

}

export default JSCApi;
