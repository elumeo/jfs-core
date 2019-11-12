import client from './base/JscClient';

// This constant is used in the project tools (not in the JFS apps)
export const JSC_API_VERSION: string = 'd2b4660b4185fa1d2ba011ffe2ad228d';

namespace JSCApi {

  export interface IUrlParams {
    filter?: string;
    options?: string;
  }

  export namespace DTO {

    export namespace Authorization {

      export interface IPropertyDTO {
        key?: string;
        value?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
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

      export interface IWebSocketRoomData {
        room: string;
        data?: any;
        lastUpdate?: any;
      }

    }

  }

  export namespace LoginClient {

    export async function loginFrontend(appName: string, credentials: JSCApi.DTO.Login.ICredentialsDTO, params?: IUrlParams) {
      return await client.post<JSCApi.DTO.Session.IFrontendSessionDTO>(`/session/${encodeURI(appName)}`, credentials, {params: params});
    }

  }

  export namespace SessionClient {

    export async function getCurrentSessionFrontend(appName: string, params?: IUrlParams) {
      return await client.get<JSCApi.DTO.Session.IFrontendSessionDTO>(`/session/${encodeURI(appName)}`, {params: params});
    }

    export async function logout(session: JSCApi.DTO.Session.ISessionDTO, params?: IUrlParams) {
      return await client.delete<null>(`/session`, session, {params: params});
    }

  }

  export namespace SystemClient {

    export async function getRegion(params?: IUrlParams) {
      return await client.get<string>(`/region`, {params: params});
    }

  }

}

export default JSCApi;
