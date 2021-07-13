import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export class HttpClient {

  static generateAxiosConfig: () => AxiosRequestConfig;

  protected static setConfigGenerator = (generateAxiosConfig: () => AxiosRequestConfig) => {
    HttpClient.generateAxiosConfig = generateAxiosConfig;
  };

  protected static createInstance(axiosConfig?: AxiosRequestConfig) {
    return axios.create({
      ...HttpClient.generateAxiosConfig(),
      ...(axiosConfig || {})
    });
  }

  public static get<R>(url: string, config: AxiosRequestConfig = {}) {
    return HttpClient.createInstance()
      .get<R>(url, config)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  public static post<R>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return HttpClient.createInstance()
      .post<R>(url, data, config)
      .catch((error: AxiosError) => {
        throw error
      });
  }

  public static put<R>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return HttpClient.createInstance()
      .put<R>(url, data, config)
      .catch((error: AxiosError) => {
        throw error
      });
  }

  public static patch<R>(url: string, data: any, config: AxiosRequestConfig = {}) {
    return HttpClient.createInstance()
      .patch<R>(url, data, config)
      .catch((error: AxiosError) => {
        throw error
      });
  }

  public static delete<R>(url: string, data: any, config: AxiosRequestConfig = {}) {
    // Because Axios does not allow data body during delete request we have to put this in the config as a workaround
    // @See: https://github.com/axios/axios/issues/736
    return HttpClient.createInstance(config)
      .delete(url, { ...config, data })
      .catch((error: AxiosError) => {
        throw error
      });
  }
}
