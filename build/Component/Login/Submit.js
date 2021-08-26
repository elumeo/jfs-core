import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from '../../Types/Redux';
import ButtonProgress from '../Button/ButtonProgress';
const Submit = ({ onClick, disabled }) => {
    const intl = useIntl();
    const isCheckingLogin = useSelector(state => state.Core.Login.isCheckingLogin);
    return (React.createElement(ButtonProgress, { color: 'primary', variant: 'contained', onClick: onClick, disabled: disabled, inProgress: isCheckingLogin }, intl.formatMessage({ id: 'login.button' })));
};
export default Submit;
