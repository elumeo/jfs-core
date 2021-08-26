import React from 'react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
const Cancel = ({ onClick }) => {
    const intl = useIntl();
    return (React.createElement(Button, { onClick: onClick, variant: 'outlined' }, intl.formatMessage({ id: 'app.cancel.action' })));
};
export default Cancel;
