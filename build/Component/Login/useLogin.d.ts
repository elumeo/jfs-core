import * as Type from '../../Types/Login';
type useLoginProps = {
    open: boolean;
    credentials: Type.Credentials;
    onChange: (next: Type.Credentials) => void;
    check: () => void;
};
declare const useLogin: () => useLoginProps;
export default useLogin;
