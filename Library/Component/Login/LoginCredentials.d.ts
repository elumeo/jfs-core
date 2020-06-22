import { checkLogin, updateCredentials } from '../../Store/Action/LoginAction';
export interface ILoginCredentialsProps {
    language?: string;
    username?: string;
    password?: string;
    checkLogin?: (payload: checkLogin.Payload) => void;
    updateCredentials?: (payload: updateCredentials.Payload) => void;
}
declare const _default: import("react-redux").ComponentClass<ILoginCredentialsProps>;
export default _default;
