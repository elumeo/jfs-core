import React from 'react';
import useActions from '../../../Store/useActions';
import { useSelector } from '../../../Types/Redux';
const useLogout = () => {
    const { logout, closeLogout } = useActions();
    const open = useSelector(state => (state.Core.Logout.logoutOpen));
    const pending = useSelector(state => (state.Core.Logout.logoutPending));
    const _logout = React.useCallback((session) => logout(session), [logout]);
    const _closeLogout = React.useCallback(() => closeLogout(), [closeLogout]);
    return {
        open,
        pending,
        commit: _logout,
        close: _closeLogout,
    };
};
export default useLogout;
