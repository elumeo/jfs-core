import useActions from '../../Store/useActions';
declare const useLogout: () => {
    open: boolean;
    pending: boolean;
    commit: ReturnType<typeof useActions>['logout'];
    close: () => void;
};
export default useLogout;
