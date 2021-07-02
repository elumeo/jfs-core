declare const useLogout: () => {
    open: boolean;
    pending: boolean;
    commit: (session: any) => import("typesafe-actions").PayloadAction<"route/LOGOUT", import("../../Store/Action").logout.Payload>;
    close: () => import("typesafe-actions").EmptyAction<"logout/CLOSE">;
};
export default useLogout;
