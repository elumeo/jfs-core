import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  static generateAxiosConfig: () => AxiosRequestConfig;

  protected static setConfigGenerator = (
    generateAxiosConfig: () => AxiosRequestConfig,
  ): void => {
    HttpClient.generateAxiosConfig = generateAxiosConfig;
  };

  protected static createInstance (
    axiosConfig?: AxiosRequestConfig,
  ): AxiosInstance {
    return axios.create({
      ...HttpClient.generateAxiosConfig(),
      ...(axiosConfig || {}),
    });
  }

  public static async get<R> (
    url: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    return HttpClient.createInstance().get<R>(url, config);
  }

  public static async post<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    return HttpClient.createInstance().post<R>(url, data, config);
  }

  public static async put<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    return HttpClient.createInstance().put<R>(url, data, config);
  }

  public static async patch<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    return HttpClient.createInstance().patch<R>(url, data, config);
  }

  public static async delete<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    // Because Axios does not allow data body during delete request we have to put this in the config as a workaround
    // @See: https://github.com/axios/axios/issues/736
    return HttpClient.createInstance(config).delete(url, { ...config, data });
  }
}
