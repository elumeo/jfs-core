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
import * as Token from '../LOCAL_STORAGE/Token';
const catchUnauthorized = (url, error) => {
    const isUnauthorized = (error.isAxiosError &&
        error.response.status === 401);
    const isGetCurrentSessionFrontend = (error.isAxiosError &&
        ['GET', 'get'].includes(error.config.method) &&
        url.startsWith('/session') &&
        url.split('/').length === 3);
    const isLoginFrontend = (error.isAxiosError &&
        ['POST', 'post'].includes(error.config.method) &&
        url.startsWith('/session') &&
        url.split('/').length === 3);
    const isBlacklisted = isGetCurrentSessionFrontend || isLoginFrontend;
    if (isUnauthorized && !isBlacklisted) {
        Token.removeToken();
        location.reload();
    }
    else {
        throw error;
    }
};
export class HttpClient {
    static createInstance(axiosConfig) {
        return axios.create(Object.assign(Object.assign({}, HttpClient.generateAxiosConfig()), (axiosConfig || {})));
    }
    static get(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield HttpClient.createInstance().get(url, config);
            }
            catch (error) {
                catchUnauthorized(url, error);
                return null;
            }
        });
    }
    static post(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield HttpClient.createInstance().post(url, data, config);
            }
            catch (error) {
                catchUnauthorized(url, error);
                return null;
            }
        });
    }
    static put(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield HttpClient.createInstance().put(url, data, config);
            }
            catch (error) {
                catchUnauthorized(url, error);
                return null;
            }
        });
    }
    static patch(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield HttpClient.createInstance().patch(url, data, config);
            }
            catch (error) {
                catchUnauthorized(url, error);
                return null;
            }
        });
    }
    static delete(url, data, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Because Axios does not allow data body during delete request we have to put this in the config as a workaround
                // @See: https://github.com/axios/axios/issues/736
                return yield HttpClient.createInstance(config).delete(url, Object.assign(Object.assign({}, config), { data }));
            }
            catch (error) {
                catchUnauthorized(url, error);
                return null;
            }
        });
    }
}
HttpClient.setConfigGenerator = (generateAxiosConfig) => {
    HttpClient.generateAxiosConfig = generateAxiosConfig;
};
