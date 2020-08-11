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