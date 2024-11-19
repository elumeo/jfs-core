import { logout } from '../../Store/Action';
declare const useLogout: () => {
    open: boolean;
    pending: boolean;
    commit: (session: (typeof logout)['arguments']) => void;
    close: VoidFunction;
};
export default useLogout;
