import React from 'react';
import { useSelector } from '../../../Types/Redux';
import useActions from '../../../Store/useActions';
import * as Selector from '../../../Store/Selector';
const useLogin = () => {
    const { checkLogin } = useActions();
    const open = useSelector(Selector.isLoginOpen);
    const [credentials, setCredentials] = React.useState({
        username: '',
        password: ''
    });
    return {
        open,
        credentials,
        onChange: (next) => setCredentials(next),
        check: () => checkLogin(credentials)
    };
};
export default useLogin;
