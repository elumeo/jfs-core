declare const useLogout: () => {
    open: boolean;
    pending: boolean;
    commit: VoidFunction;
    close: () => void;
};
export default useLogout;
