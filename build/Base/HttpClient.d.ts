import { AxiosRequestConfig } from 'axios';
export declare class HttpClient {
    static generateAxiosConfig: () => AxiosRequestConfig;
    protected static setConfigGenerator: (generateAxiosConfig: any) => void;
    protected static createInstance(axiosConfig?: AxiosRequestConfig): any;
    static get<R>(url: string, config?: AxiosRequestConfig): any;
    static post<R>(url: string, data: any, config?: AxiosRequestConfig): any;
    static put<R>(url: string, data: any, config?: AxiosRequestConfig): any;
    static patch<R>(url: string, data: any, config?: AxiosRequestConfig): any;
    static delete<R>(url: string, data: any, config?: AxiosRequestConfig): any;
}
