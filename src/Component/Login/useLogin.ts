import React, { useCallback } from 'react';
import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';
import * as Type from 'Types/Login';
import * as Selector from 'Store/Selector';

type useLoginProps = {
  open: boolean;
  credentials: Type.Credentials;
  onChange: (next: Type.Credentials) => void;
  check: () => void;
}

const useLogin = (): useLoginProps => {
  const { checkLogin } = useActions();
  const open = useSelector(Selector.isLoginOpen);
  const [credentials, setCredentials] = React.useState<Type.Credentials>({
    username: '',
    password: '',
  });
  const handleCheck: useLoginProps['check'] = useCallback(() => checkLogin(credentials), [credentials]);
  const handleOnChange: useLoginProps['onChange'] = useCallback(next => setCredentials(next), []);

  return {
    open,
    credentials,
    onChange: handleOnChange,
    check: handleCheck,
  };
};

export default useLogin;
