import { Credentials } from '../Credentials';
declare const useLogin: () => {
    open: boolean;
    error: boolean;
    credentials: {
        username: string;
        password: string;
    };
    onChange: (next: Credentials) => import("typesafe-actions").PayloadAction<"login/UPDATE_CREDENTIALS", import("../../../Store/Action").updateCredentials.Payload>;
    check: () => import("typesafe-actions").PayloadAction<"login/CHECK", import("../../../Store/Action").checkLogin.Payload>;
};
export default useLogin;
