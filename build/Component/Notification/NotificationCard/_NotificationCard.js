import React, { useEffect } from 'react';
import Card from 'react-md/lib/Cards/Card';
import Icon from './Icon';
import Timestamp from './Timestamp';
import Actions from './Actions';
import useClassName from './useClassName';
import getContent from './getContent';
const _NotificationCard = ({ notification, topLevelRef: ref }) => {
    const { onMount, onClick } = notification;
    useEffect(() => {
        if (typeof onMount == 'function') {
            onMount(notification, ref);
        }
    }, []);
    return (React.createElement(Card, { onClick: () => onClick && onClick(notification, ref), className: useClassName(notification) },
        React.createElement("div", { className: 'notification-grid' },
            React.createElement("div", { className: 'notification-grid-content' },
                React.createElement("header", { className: 'header' },
                    React.createElement(Icon, Object.assign({}, notification)),
                    React.createElement(Timestamp, { timestamp: notification.timestamp })),
                getContent(notification).content),
            React.createElement(Actions, { topLevelRef: ref, notification: notification }))));
};
export default _NotificationCard;
//# sourceMappingURL=_NotificationCard.js.map