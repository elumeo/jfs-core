declare const useLogin: () => {
    open: boolean;
    error: boolean;
    credentials: {
        username: string;
        password: string;
    };
    onChange: import("typesafe-actions").PayloadAC<"login/UPDATE_CREDENTIALS", import("../../../Store/Action").updateCredentials.Payload>;
    check: () => import("typesafe-actions").PayloadAction<"login/CHECK", import("../../../Store/Action").checkLogin.Payload>;
};
export default useLogin;
