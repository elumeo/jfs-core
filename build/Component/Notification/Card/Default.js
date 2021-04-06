import React from 'react';
import * as MUI from '@material-ui/core';
const DefaultNotificationCard = ({ id, title, subtitle, content, actions, translate }) => {
    // const {formatMessage} = useIntl()
    return React.createElement(React.Fragment, null,
        React.createElement(MUI.CardContent, { color: 'inherit' },
            React.createElement(MUI.Typography, { variant: 'subtitle1' }, title),
            React.createElement(MUI.Typography, { variant: 'subtitle2' }, subtitle),
            React.createElement(MUI.Typography, { variant: 'caption' }, content)),
        React.createElement(MUI.CardActions, null, actions));
};
export default DefaultNotificationCard;
//# sourceMappingURL=Default.js.map