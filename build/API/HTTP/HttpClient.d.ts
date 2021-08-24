import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class HttpClient {
    static generateAxiosConfig: () => AxiosRequestConfig;
    protected static setConfigGenerator: (generateAxiosConfig: () => AxiosRequestConfig) => void;
    protected static createInstance(axiosConfig?: AxiosRequestConfig): AxiosInstance;
    static get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    static post<R>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    static put<R>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    static patch<R>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
    static delete<R>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
}
