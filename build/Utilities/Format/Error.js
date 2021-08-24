const isAxiosError = (error) => ['config', 'code', 'request', 'response'].every(key => key in error);
const isJscError = (error) => isAxiosError(error) &&
    typeof error.response.data === 'object' &&
    ['id', 'message'].every(key => key in error.response.data);
const head = (error) => {
    const { status, statusText } = error.response;
    const method = error.config.method.toUpperCase();
    const url = error.config.url.substring(error.config.baseURL.length);
    return `(http: ${status} ${statusText} // ${method} ${url})`;
};
const body = (error) => {
    const { data } = error.response;
    if (isJscError(error)) {
        const { id, message } = data;
        return `${message} (${id})`;
    }
    else {
        return JSON.stringify(data, null, 2);
    }
};
const http = (error) => ({
    title: head(error),
    details: body(error),
});
const generic = (error) => ({
    title: error.name,
    details: error.message + '\n' + error.stack,
});
export const apply = (error) => (isAxiosError(error) ? http(error) : generic(error));
