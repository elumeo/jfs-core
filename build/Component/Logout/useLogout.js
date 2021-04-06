import useActions from '../../Store/useActions';
import { useSelector } from '../../Types/Redux';
const useLogout = () => {
    const { logout, closeLogout } = useActions();
    const open = useSelector(state => (state.Core.Logout.logoutOpen));
    const pending = useSelector(state => (state.Core.Logout.logoutPending));
    return {
        open,
        pending,
        commit: logout,
        close: closeLogout,
    };
};
export default useLogout;
//# sourceMappingURL=useLogout.js.map