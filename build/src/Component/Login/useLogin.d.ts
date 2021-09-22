import * as Type from '../../../Types/Login';
declare const useLogin: () => {
    open: boolean;
    credentials: Type.Credentials;
    onChange: (next: Type.Credentials) => void;
    check: () => void;
};
export default useLogin;
