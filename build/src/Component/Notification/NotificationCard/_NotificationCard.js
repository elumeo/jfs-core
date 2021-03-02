import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const _NotificationCard = ({ notification, topLevelRef: ref }) => {
    const { onMount, onClick } = notification;
    const { content } = getContent(notification);
    useEffect(() => {
        if (typeof onMount == 'function') {
            onMount(notification, ref);
        }
    }, []);
    return (React.createElement(Card, { onClick: () => onClick && onClick(notification, ref), className: useClassName(notification) },
        React.createElement(CardHeader, { avatar: React.createElement(Icon, Object.assign({}, notification)), subheader: React.createElement(Timestamp, { timestamp: notification.timestamp }), action: React.createElement(CardActions, null,
                React.createElement(Actions, { topLevelRef: ref, notification: notification })) }),
        React.createElement(CardContent, null, content)));
};
export default _NotificationCard;
//# sourceMappingURL=_NotificationCard.js.map