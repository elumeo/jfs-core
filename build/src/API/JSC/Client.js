import * as Token from '../LOCAL_STORAGE/Token';
import { HttpClient } from '../../../API/HTTP/HttpClient';
export default class JscClient extends HttpClient {
}
JscClient.Config = {};
JscClient.PackageJson = {};
JscClient.setConfig = Config => {
    JscClient.Config = Config;
    JscClient.setConfigGenerator(JscClient.generateAxiosConfig);
};
JscClient.setPackageJson = PackageJson => {
    JscClient.PackageJson = PackageJson;
};
JscClient.generateAxiosConfig = () => ({
    baseURL: JscClient.Config.JscClient.Host,
    timeout: JscClient.Config.JscClient.Timeout,
    validateStatus: (status) => status < 400,
    headers: Object.assign({ 'X-JSC-APP-VERSION': `${JscClient.Config.AppName}-${JscClient.PackageJson.version}` }, (Token.isLoggedIn()
        ? { 'X-JSC-TOKEN': Token.getToken() }
        : {}))
});
//# sourceMappingURL=Client.js.map