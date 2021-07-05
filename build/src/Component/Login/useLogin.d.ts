import * as Type from '../../../Types/Login';
declare const useLogin: () => {
    open: boolean;
    credentials: Type.Credentials;
    onChange: (next: Type.Credentials) => void;
    check: () => import("typesafe-actions").PayloadAction<"login/CHECK", import("../../Store/Action").checkLogin.Payload>;
};
export default useLogin;
