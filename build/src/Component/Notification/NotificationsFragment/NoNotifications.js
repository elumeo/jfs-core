import Paper from '@material-ui/core/Paper';
import FontIcon from '@material-ui/core/Icon';
import React from 'react';
import { useIntl } from 'react-intl';
const NoNotifications = () => {
    const { formatMessage } = useIntl();
    return React.createElement("div", { className: "badges__notifications__empty" },
        React.createElement(Paper, { className: "md-text badges__notifications__empty__message", elevation: 1 },
            React.createElement(React.Fragment, null, formatMessage({ id: 'app.noNotifications' }))),
        React.createElement(FontIcon, { className: "badges__notifications__empty__icon" }, "notifications"));
};
export default NoNotifications;
//# sourceMappingURL=NoNotifications.js.map