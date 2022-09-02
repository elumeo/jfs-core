import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { useSelector } from 'Types/Redux';
import * as Type from 'Types/Login';
import * as Selector from 'Store/Selector';
import { checkLogin } from 'Store/Action';

type useLoginProps = {
  open: boolean;
  credentials: Type.Credentials;
  onChange: (next: Type.Credentials) => void;
  check: () => void;
}

const useLogin = (): useLoginProps => {
  const dispatch = useDispatch()
  const open = useSelector(Selector.isLoginOpen);
  const [credentials, setCredentials] = React.useState<Type.Credentials>({
    username: '',
    password: '',
  });
  const handleCheck: useLoginProps['check'] = useCallback(() => dispatch(checkLogin(credentials)), [credentials, dispatch]);
  const handleOnChange: useLoginProps['onChange'] = useCallback(next => setCredentials(old => ({ ...old, ...next })), [setCredentials]);

  return {
    open,
    credentials,
    onChange: handleOnChange,
    check: handleCheck,
  };
};

export default useLogin;
