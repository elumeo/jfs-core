import { AxiosError } from "axios";

const isAxiosError = (error: Error) => (
  ['config', 'code', 'request', 'response']
    .every(key => key in error)
);

const isJscError = (error: Error) => (
  isAxiosError(error) &&
  typeof (error as AxiosError).response.data === 'object' &&
  ['id', 'message']
    .every(key => key in (error as AxiosError).response.data)
);

const head = (error: AxiosError) => {
  const { status, statusText } = error.response;
  const method = error.config.method.toUpperCase();
  const url = error.config.url.substring(error.config.baseURL.length);
  return `(http: ${status} ${statusText} // ${method} ${url})`;
};

const body = (error: AxiosError) => {
  const { data } = error.response;
  if (isJscError(error)) {
    const { id, message } = data;
    return `${message} (${id})`;
  }
  else {
    return JSON.stringify(data, null, 2);
  }
};

const http = (error: AxiosError) => ({
  title: head(error as AxiosError),
  details: body(error as AxiosError)
});

const generic = (error: Error) => ({
  title: error.name,
  details: error.message + '\n' + error.stack
});

export const apply = (error: Error) => (
  isAxiosError(error)
    ? http(error as AxiosError)
    : generic(error)
);