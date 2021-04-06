import React from 'react';
import { useSelector } from '../../../Types/Redux';
import Card from '../../Notification/Card';
import Empty from './Empty';
import * as MUI from '@material-ui/core';
import * as ICONS from '@material-ui/icons';
import useActions from '../../../Store/useActions';
import { useTheme } from '@material-ui/core';
const History = () => {
    const history = useSelector(state => state.Core.Notification.history);
    const { removeNotification } = useActions();
    const { palette } = useTheme();
    return history.length ? (React.createElement(MUI.Box, { component: 'div', style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            overflowY: 'scroll',
            gap: '8px',
        } }, history.map((notification) => {
        var _a;
        return (
        // <MUI.ListItem
        //   key={notification.id}
        //   style={{
        //     width: '100%'
        //   }}
        // >
        React.createElement(Card
        // variant={notification.variant}
        , { 
            // variant={notification.variant}
            key: `card-${notification.id}`, 
            // children={notification.content}
            notification: notification, actions: [
                React.createElement(MUI.IconButton, { onClick: () => removeNotification(notification.id), key: `notification__icon-btn__cancel--${notification.id}` },
                    React.createElement(ICONS.Delete, { key: `notification__icon__cancel--${notification.id}`, style: { color: (_a = palette === null || palette === void 0 ? void 0 : palette[notification.variant]) === null || _a === void 0 ? void 0 : _a['contrastText'] } }))
            ] })
        // <Card
        //   key={`card-${notification.id}`}
        //   actions={[
        // <MUI.IconButton
        //   onClick={() => removeNotification(notification.id)}
        //   key={`notification__icon-btn__cancel--${notification.id}`}
        // >
        //   {' '}
        //   <ICONS.Cancel key={`notification__icon__cancel--${notification.id}`} />
        // </MUI.IconButton>
        //   ]}
        // >
        //   <MUI.Typography>{notification.content}</MUI.Typography>
        // </Card>
        // </MUI.ListItem>
        );
    }))) : (React.createElement(Empty, null));
};
export default History;
//# sourceMappingURL=All.js.map