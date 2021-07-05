import * as Type from '../../Types/Login';
declare const useLogin: () => {
    open: boolean;
    credentials: Type.Credentials;
    onChange: (next: Type.Credentials) => void;
    check: () => import("typesafe-actions").PayloadAction<"login/CHECK", Type.Credentials>;
};
export default useLogin;
