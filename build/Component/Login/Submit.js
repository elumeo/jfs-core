import React from 'react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from '../../Types/Redux';
const Submit = ({ onClick }) => {
    const intl = useIntl();
    const isCheckingLogin = useSelector(state => state.Core.Login.isCheckingLogin);
    return (React.createElement(Button, { color: 'primary', onClick: onClick, disabled: isCheckingLogin }, isCheckingLogin
        ? React.createElement(CircularProgress, { size: '1.8rem' })
        : intl.formatMessage({ id: 'login.button' })));
};
export default Submit;
