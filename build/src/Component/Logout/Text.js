import React from 'react';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';
const Text = ({ override }) => {
    const intl = useIntl();
    return (React.createElement(Typography, null, override
        ? override
        : intl.formatMessage({ id: 'app.logout.message' })));
};
export default Text;
