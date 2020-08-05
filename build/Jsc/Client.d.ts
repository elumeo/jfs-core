import IConfig from '../Types/Configuration';
import { HttpClient } from '../Base/HttpClient';
export default class JscClient extends HttpClient {
    static Config: IConfig;
    static PackageJson: {
        version: string;
    };
    static setConfig: (Config: any) => void;
    static setPackageJson: (PackageJson: any) => void;
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
