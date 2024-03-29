import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { PayloadAction } from "typesafe-actions";
import { IWebSocketRoom } from "../../Types/WebSocket";
declare namespace JSCApi {
    interface IUrlParams {
        filter?: string;
        options?: string;
        searchString?: string;
    }
    interface IJscClientConfig {
        params?: IUrlParams;
    }
    namespace DTO {
        namespace DebugNotification {
            interface IMattermostDTO {
                message?: string;
                payload?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace Login {
            interface IPublicKeyDTO {
                publicKey?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
            interface ICredentialsDTO {
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
        namespace Session {
            interface IFrontendSessionDTO {
                session?: DTO.Session.ISessionDTO;
                appProperties?: DTO.Authorization.IPropertyDTO[];
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
            interface IPropertyDTO {
                key?: string;
                value?: string;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
            interface IUserRightsDTO {
                assignedApps?: DTO.App.IAppDTO[];
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
                inAppRightsCount?: number;
                createdAt?: string;
                createdBy?: string;
                modifiedAt?: string;
                modifiedBy?: string;
            }
        }
        namespace WebSocket {
            interface IWebSocketRoomUpdateDTO<T1> {
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
    namespace DebugNotificationClient {
        const sendToMattermost: (message: DTO.DebugNotification.IMattermostDTO, config?: IJscClientConfig) => Promise<AxiosResponse<void>>;
    }
    namespace LoginClient {
        const getLoginPublicKey: (config?: IJscClientConfig) => Promise<AxiosResponse<DTO.Login.IPublicKeyDTO>>;
        const loginFrontend: (appName: string, credentials: DTO.Login.ICredentialsDTO, config?: IJscClientConfig) => Promise<AxiosResponse<DTO.Session.IFrontendSessionDTO>>;
    }
    namespace SessionClient {
        const getCurrentSessionFrontend: (appName: string, config?: IJscClientConfig) => Promise<AxiosResponse<DTO.Session.IFrontendSessionDTO>>;
        const logout: (session: DTO.Session.ISessionDTO, config?: IJscClientConfig) => Promise<AxiosResponse<void>>;
    }
    namespace SystemClient {
        const getRegion: (config?: IJscClientConfig) => Promise<AxiosResponse<string>>;
    }
    namespace UserClient {
        const getUserRights: (login: string, config?: IJscClientConfig) => Promise<AxiosResponse<DTO.Authorization.IUserRightsDTO>>;
    }
    namespace WebSocketClient {
        const ROOM_PING: IWebSocketRoom;
        const onRoomUpdatePing: (action: PayloadAction<string, DTO.WebSocket.IWebSocketRoomUpdateDTO<string>>) => Observable<string>;
    }
}
export default JSCApi;
