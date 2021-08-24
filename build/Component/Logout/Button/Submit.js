import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useIntl } from 'react-intl';
const Submit = ({ pending, onClick }) => {
    const intl = useIntl();
    return (React.createElement(Button, { disabled: pending, onClick: onClick, color: 'primary' }, pending ? (React.createElement(CircularProgress, { size: '1.8rem' })) : (intl.formatMessage({ id: 'app.logout.action' }))));
};
export default Submit;
