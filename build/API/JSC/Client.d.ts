import { Configuration } from 'Types/Configuration';
import { HttpClient } from 'API/HTTP/HttpClient';
export default class JscClient extends HttpClient {
    static Config: Configuration;
    static PackageJson: {
        version: string;
    };
    static setConfig: (Config: Configuration) => void;
    static setPackageJson: (PackageJson: {
        version: string;
    }) => void;
    static generateAxiosConfig: () => {
        baseURL: string;
        timeout: number;
        validateStatus: (status: number) => boolean;
        headers: {
            'X-JSC-TOKEN'?: string;
            'X-JSC-APP-VERSION': string;
        };
    };
}
