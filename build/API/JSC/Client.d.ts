import { Configuration } from '../../Types/Configuration';
import { HttpClient } from '../HTTP/HttpClient';
import { AxiosRequestConfig } from 'axios';
export default class JscClient extends HttpClient {
    static Config: Configuration;
    static PackageJson: {
        version: string;
    };
    static setConfig: (Config: Configuration) => void;
    static setPackageJson: (PackageJson: {
        version: string;
    }) => void;
    static generateAxiosConfig: () => AxiosRequestConfig;
}
