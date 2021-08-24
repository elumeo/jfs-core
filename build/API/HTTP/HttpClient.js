var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export class HttpClient {
    static createInstance(axiosConfig) {
        return axios.create(Object.assign(Object.assign({}, HttpClient.generateAxiosConfig()), (axiosConfig || {})));
    }
    static get(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return HttpClient.createInstance().get(url, config);
        });
    }
    static post(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return HttpClient.createInstance().post(url, data, config);
        });
    }
    static put(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return HttpClient.createInstance().put(url, data, config);
        });
    }
    static patch(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return HttpClient.createInstance().patch(url, data, config);
        });
    }
    static delete(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            // Because Axios does not allow data body during delete request we have to put this in the config as a workaround
            // @See: https://github.com/axios/axios/issues/736
            return HttpClient.createInstance(config).delete(url, Object.assign(Object.assign({}, config), { data }));
        });
    }
}
HttpClient.setConfigGenerator = (generateAxiosConfig) => {
    HttpClient.generateAxiosConfig = generateAxiosConfig;
};
