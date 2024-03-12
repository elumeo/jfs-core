import { checkLogin } from 'Store/Action/Login';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'Types/Redux';
import * as Type from 'Types/Login';
import * as Selector from 'Store/Selector';

const useLogin = () => {
  const dispatch = useDispatch();
  const open = useSelector(Selector.Login.isLoginOpen);
  const [credentials, setCredentials] = React.useState<Type.Credentials>({
    username: null,
    password: null,
  });
  const handleCheck: () => void = React.useCallback(() => {
    setCredentials({...credentials, password: null});
    dispatch(checkLogin(credentials));
  }, [credentials, dispatch]);
  const handleOnChange: (next: Type.Credentials) => void = React.useCallback(next => setCredentials(next), [setCredentials]);
  return {
    open,
    credentials,
    onChange: handleOnChange,
    check: handleCheck,
  };
};

export default useLogin;
