import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import * as Token from '../LOCAL_STORAGE/Token';

const catchUnauthorized = (url: string, error: AxiosError) => {
  const isUnauthorized = (
    error.isAxiosError &&
    (error as AxiosError).response.status === 401
  );

  const isGetCurrentSessionFrontend = (
    error.isAxiosError &&
    (error as AxiosError).config.method === 'GET' &&
    url.startsWith('/session') &&
    url.split('/').length === 3
  );

  if (
    isUnauthorized &&
    !isGetCurrentSessionFrontend
  ) {
    Token.removeToken();
    location.reload();
  }
  else {
    throw error;
  }
}

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
    try {
      return await HttpClient.createInstance().get<R>(url, config);
    }
    catch (error) {
      console.log(error);
      catchUnauthorized(url, error);
      return null;
    }
  }

  public static async post<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    try {
      return await HttpClient.createInstance().post<R>(url, data, config);
    }
    catch (error) {
      catchUnauthorized(url, error);
      return null;
    }
  }

  public static async put<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    try {
      return await HttpClient.createInstance().put<R>(url, data, config);
    }
    catch (error) {
      catchUnauthorized(url, error);
      return null;
    }
  }

  public static async patch<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    try {
      return await HttpClient.createInstance().patch<R>(url, data, config);
    }
    catch (error) {
      catchUnauthorized(url, error);
      return null;
    }
  }

  public static async delete<R> (
    url: string,
    data: unknown,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<R>> {
    try {
      // Because Axios does not allow data body during delete request we have to put this in the config as a workaround
      // @See: https://github.com/axios/axios/issues/736
      return await HttpClient.createInstance(config).delete(url, { ...config, data });
    } catch (error) {
      catchUnauthorized(url, error);
      return null;
    }
  }
}
