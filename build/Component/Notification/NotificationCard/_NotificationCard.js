import React, { useEffect } from 'react';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
import * as MUI from '@material-ui/core';
const _NotificationCard = ({ notification, topLevelRef: ref }) => {
    const { onMount, onClick } = notification;
    const { content } = getContent(notification);
    useEffect(() => {
        if (typeof onMount == 'function') {
            onMount(notification, ref);
        }
    }, []);
    return (React.createElement(MUI.Card, { onClick: () => onClick && onClick(notification, ref), className: useClassName(notification) },
        React.createElement(MUI.CardHeader, { avatar: React.createElement(Icon, Object.assign({}, notification)), subheader: React.createElement(Timestamp, { timestamp: notification.timestamp }), action: React.createElement(Actions, { topLevelRef: ref, notification: notification }) }),
        React.createElement(MUI.CardContent, null, content)));
};
export default _NotificationCard;
//# sourceMappingURL=_NotificationCard.js.map