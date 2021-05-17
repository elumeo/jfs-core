import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';
import useLoginDialogIsOpen from './useLoginDialogIsOpen';
import useLoginError from './useLoginError';
import { Credentials } from '../Credentials';

const useLogin = () => {
  const { updateCredentials, checkLogin } = useActions();
  const credentials = useSelector(state => ({
    username: state.Core.Login.username,
    password: state.Core.Login.password
  }));
  return {
    open: useLoginDialogIsOpen(),
    error: useLoginError(),
    credentials,
    onChange: (next: Credentials) => updateCredentials(next),
    check: () => checkLogin(credentials)
  }
};

export default useLogin;
