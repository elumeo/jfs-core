declare const useLogout: () => {
    open: boolean;
    pending: boolean;
    commit: import("typesafe-actions").PayloadAC<"route/LOGOUT", import("../../Store/Action").logout.Payload>;
    close: import("typesafe-actions").EmptyAC<"logout/CLOSE">;
};
export default useLogout;
