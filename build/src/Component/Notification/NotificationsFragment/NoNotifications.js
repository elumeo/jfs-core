import { Paper } from 'react-md/lib/Papers';
import { FontIcon } from 'react-md/lib/FontIcons';
import React from 'react';
import International from '../../../../Component/International';
const NoNotifications = () => (React.createElement("div", { className: "badges__notifications__empty" },
    React.createElement(Paper, { className: "md-text badges__notifications__empty__message", zDepth: 1 },
        React.createElement(International, null, ({ formatMessage }) => (React.createElement(React.Fragment, null, formatMessage({ id: 'app.noNotifications' }))))),
    React.createElement(FontIcon, { className: "badges__notifications__empty__icon" }, "notifications")));
export default NoNotifications;
//# sourceMappingURL=NoNotifications.js.map