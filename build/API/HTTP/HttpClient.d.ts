import { AxiosRequestConfig } from 'axios';
export declare class HttpClient {
    static generateAxiosConfig: () => AxiosRequestConfig;
    protected static setConfigGenerator: (generateAxiosConfig: any) => void;
    protected static createInstance(axiosConfig?: AxiosRequestConfig): import("axios").AxiosInstance;
    static get<R>(url: string, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<R>>;
    static post<R>(url: string, data: any, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<R>>;
    static put<R>(url: string, data: any, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<R>>;
    static patch<R>(url: string, data: any, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<R>>;
    static delete<R>(url: string, data: any, config?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any>>;
}
