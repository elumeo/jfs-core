import React from 'react';
import { useSelector } from '../../../Types/Redux';
import Card from '../../Notification/Card';
import Empty from './Empty';
import * as MUI from '@material-ui/core';
const All = () => {
    const history = useSelector(state => state.Core.Notification.history);
    useSelector(state => state.Core.App.appInitialized);
    return (history.length
        ? (React.createElement(MUI.Box, { component: 'div', style: {
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
                gap: '8px',
            } }, history.map((notification) => (React.createElement(MUI.ListItem, { key: notification.id, style: { width: '100%' } },
            React.createElement(Card, { notification: notification, temporary: false }))))))
        : React.createElement(Empty, null));
};
export default All;
