import React from 'react';
import { useIntl } from 'react-intl';
import ButtonProgress from '../../Button/ButtonProgress';
const Submit = ({ pending, onClick }) => {
    const intl = useIntl();
    return (React.createElement(ButtonProgress, { inProgress: pending, onClick: onClick, color: 'primary', variant: 'contained' }, intl.formatMessage({ id: 'app.logout.action' })));
};
export default Submit;
