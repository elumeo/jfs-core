import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { PayloadAction } from "typesafe-actions";
import { IWebSocketRoom } from "../../Store/Reducer/Core/WebSocketConnectionReducer";
declare namespace JSCApi {
    interface IUrlParams {
        filter?: string;
        options?: string;
    }
    interface IJscClientConfig {
        params?: IUrlParams;
    }
    export namespace DTO {
        namespace Login {
            interface ICredentialsDTO {
                username?: string;
                password?: string;
                token?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace Session {
            interface IFrontendSessionDTO {
                session?: JSCApi.DTO.Session.ISessionDTO;
                appProperties?: JSCApi.DTO.Authorization.IPropertyDTO[];
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
            interface ISessionDTO {
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
        namespace Authorization {
            const ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READ = "1";
            const ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_WRITE = "2";
            const ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_CREATE = "4";
            const ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_DELETE = "8";
            const ENTITY_ATTRIBUTE_ACCESS_DTO_ACCESS_READWRITE = "3";
            interface IPropertyDTO {
                key?: string;
                value?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
            interface IUserRightsDTO {
                entityAttributeAccesses?: JSCApi.DTO.Authorization.IEntityAttributeAccessDTO[];
                assignedApps?: JSCApi.DTO.App.IAppDTO[];
            }
            interface IEntityAttributeAccessDTO {
                entity?: string;
                attribute?: string;
                access?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace App {
            const APP_DTO_FRONTEND_APP_DOCK = "appDock";
            const APP_DTO_FRONTEND_JFS = "jfs";
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
    export namespace LoginClient {
        const loginFrontend: (appName: any, credentials: any, config?: IJscClientConfig) => Promise<AxiosResponse<JSCApi.DTO.Session.IFrontendSessionDTO>>;
    }
    export namespace SessionClient {
        const getCurrentSessionFrontend: (appName: any, config?: IJscClientConfig) => Promise<AxiosResponse<JSCApi.DTO.Session.IFrontendSessionDTO>>;
        const logout: (session: any, config?: IJscClientConfig) => Promise<AxiosResponse<void>>;
    }
    export namespace SystemClient {
        const getRegion: (config?: IJscClientConfig) => Promise<AxiosResponse<string>>;
    }
    export namespace UserClient {
        const getUserRights: (login: any, config?: IJscClientConfig) => Promise<AxiosResponse<JSCApi.DTO.Authorization.IUserRightsDTO>>;
    }
    export namespace WebSocketClient {
        const ROOM_PING: IWebSocketRoom;
        const onRoomUpdatePing: (action: PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<string>>) => Observable<string>;
    }
    export {};
}
export default JSCApi;
