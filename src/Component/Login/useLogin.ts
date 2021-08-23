import React from 'react';
import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';
import * as Type from 'Types/Login';
import * as Selector from 'Store/Selector';

const useLogin = (): {
  open: boolean;
  credentials: Type.Credentials;
  onChange: (next: Type.Credentials) => void;
  check: () => void;
} => {
  const { checkLogin } = useActions();
  const open = useSelector(Selector.isLoginOpen);
  const [credentials, setCredentials] = React.useState<Type.Credentials>({
    username: '',
    password: ''
  });
  
  return {
    open,
    credentials,
    onChange: (next: Type.Credentials) => setCredentials(next),
    check: () => checkLogin(credentials)
  }
};

export default useLogin;
