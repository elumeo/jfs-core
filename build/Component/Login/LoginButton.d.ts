import { checkLogin } from '../../Store/Action/LoginAction';
export interface ILoginButtonProps {
    isCheckingLogin?: boolean;
    checkLogin?: (payload: checkLogin.Payload) => void;
    username?: string;
    password?: string;
}
declare const _default: import("react-redux").ComponentClass<ILoginButtonProps>;
export default _default;
