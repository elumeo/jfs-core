declare const useLogout: () => {
    open: boolean;
    pending: boolean;
    commit: Function;
    close: VoidFunction;
};
export default useLogout;
