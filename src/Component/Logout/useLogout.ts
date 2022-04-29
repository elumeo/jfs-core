import { useDispatch } from 'react-redux';
import React from 'react';
// import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';
import { closeLogout, logout } from 'Store/Action';

const useLogout = (): {
  open: boolean;
  pending: boolean;
  commit: VoidFunction;
  close: () => void;
} => {
  // const { logout, closeLogout } = useActions();
  const dispatch = useDispatch()
  const open = useSelector(state => state.Core.Logout.logoutOpen);
  const pending = useSelector(state => state.Core.Logout.logoutPending);
  const _logout = React.useCallback(() => dispatch(logout()), [dispatch]);
  const _closeLogout = React.useCallback(() => dispatch(closeLogout()), [dispatch]);

  return {
    open,
    pending,
    commit: _logout,
    close: _closeLogout,
  };
};

export default useLogout;
