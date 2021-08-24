import React from 'react';
import { useIntl } from 'react-intl';
const Failure = ({ title, details }) => {
    const intl = useIntl();
    return (React.createElement("span", null,
        React.createElement("u", null,
            intl.formatMessage({ id: 'app.error' }),
            ":\u00A0"),
        details,
        React.createElement("br", null),
        title && React.createElement("span", { style: { fontSize: 'x-small' } }, title)));
};
export default Failure;
