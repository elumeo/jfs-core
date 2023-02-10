import { checkLogin } from './../../Store/Action/Login';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'Types/Redux';
import * as Type from 'Types/Login';
import * as Selector from 'Store/Selector';

type useLoginProps = {
  open: boolean;
  credentials: Type.Credentials;
  onChange: (next: Type.Credentials) => void;
  check: () => void;
}

const useLogin = (): useLoginProps => {
  const dispatch = useDispatch();
  const open = useSelector(Selector.isLoginOpen);
  const [credentials, setCredentials] = React.useState<Type.Credentials>({
    username: null,
    password: null,
  });
  const handleCheck: useLoginProps['check'] = React.useCallback(() => dispatch(checkLogin(credentials)), [credentials, dispatch]);
  const handleOnChange: useLoginProps['onChange'] = React.useCallback(next => setCredentials(next), [setCredentials]);
  return {
    open,
    credentials,
    onChange: handleOnChange,
    check: handleCheck,
  };
};

export default useLogin;
