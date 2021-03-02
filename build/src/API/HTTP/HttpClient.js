import axios from 'axios';
export class HttpClient {
    static createInstance(axiosConfig) {
        return axios.create(Object.assign(Object.assign({}, HttpClient.generateAxiosConfig()), (axiosConfig || {})));
    }
    static get(url, config = {}) {
        return HttpClient.createInstance()
            .get(url, config)
            .catch((error) => {
            throw error;
        });
    }
    static post(url, data, config = {}) {
        return HttpClient.createInstance()
            .post(url, data, config)
            .catch((error) => {
            throw error;
        });
    }
    static put(url, data, config = {}) {
        return HttpClient.createInstance()
            .put(url, data, config)
            .catch((error) => {
            throw error;
        });
    }
    static patch(url, data, config = {}) {
        return HttpClient.createInstance()
            .patch(url, data, config)
            .catch((error) => {
            throw error;
        });
    }
    static delete(url, data, config = {}) {
        // Because Axios does not allow data body during delete request we have to put this in the config as a workaround
        // @See: https://github.com/axios/axios/issues/736
        return HttpClient.createInstance({ data })
            .delete(url, config)
            .catch((error) => {
            throw error;
        });
    }
}
HttpClient.setConfigGenerator = (generateAxiosConfig) => {
    HttpClient.generateAxiosConfig = generateAxiosConfig;
};
//# sourceMappingURL=HttpClient.js.map