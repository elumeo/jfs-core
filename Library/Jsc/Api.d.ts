import { AxiosRequestConfig } from 'axios';
import { PayloadAction } from 'typesafe-actions';
import { IWebSocketRoom } from '../Store/Reducer/Core/WebSocketConnectionReducer';
export declare const JSC_API_VERSION: string;
declare namespace JSCApi {
    interface IUrlParams {
        filter?: string;
        options?: string;
    }
    interface IJscClientConfig extends AxiosRequestConfig {
        params?: IUrlParams;
    }
    namespace DTO {
        namespace WebSocket {
            interface IWebSocketRoomUpdateDTO<T5> {
                room?: string;
                namespace?: string;
                data?: T5;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace App {
            const I_APP_DTO_FRONTEND_APP_DOCK = "appDock";
            const I_APP_DTO_FRONTEND_JFS = "jfs";
            interface IAppDTO {
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
        namespace Authorization {
            const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READ = "1";
            const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_WRITE = "2";
            const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_CREATE = "4";
            const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_DELETE = "8";
            const I_ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READWRITE = "3";
            interface IEntityAttributeAccessDTO {
                entity?: string;
                attribute?: string;
                access?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
            interface IUserRightsDTO {
                entityAttributeAccesses?: Array<JSCApi.DTO.Authorization.IEntityAttributeAccessDTO>;
                assignedApps?: Array<JSCApi.DTO.App.IAppDTO>;
            }
            interface IPropertyDTO {
                key?: string;
                value?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace Session {
            interface ISessionDTO {
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
            interface IFrontendSessionDTO {
                session?: JSCApi.DTO.Session.ISessionDTO;
                appProperties?: Array<JSCApi.DTO.Authorization.IPropertyDTO>;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace Login {
            interface ICredentialsDTO {
                username?: string;
                password?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
    }
    namespace LoginClient {
        function loginFrontend(appName: string, credentials: JSCApi.DTO.Login.ICredentialsDTO, config?: IJscClientConfig): Promise<import("axios").AxiosResponse<DTO.Session.IFrontendSessionDTO>>;
    }
    namespace SessionClient {
        function getCurrentSessionFrontend(appName: string, config?: IJscClientConfig): Promise<import("axios").AxiosResponse<DTO.Session.IFrontendSessionDTO>>;
        function logout(session: JSCApi.DTO.Session.ISessionDTO, config?: IJscClientConfig): Promise<import("axios").AxiosResponse<any>>;
    }
    namespace SystemClient {
        function getRegion(config?: IJscClientConfig): Promise<import("axios").AxiosResponse<string>>;
    }
    namespace UserClient {
        function getUserRights(login: string, config?: IJscClientConfig): Promise<import("axios").AxiosResponse<DTO.Authorization.IUserRightsDTO>>;
    }
    namespace WebSocketClient {
        const ROOM_PING: IWebSocketRoom;
        function onRoomUpdatePing(action: PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<string>>): import("rxjs").Observable<string>;
    }
}
export default JSCApi;
