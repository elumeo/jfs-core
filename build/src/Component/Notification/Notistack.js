import React from 'react';
import _ from 'lodash';
import * as notistack from 'notistack';
import { useSelector } from '../../../Types/Redux';
import Card from './Card';
import * as Button from './Button';
const Notistack = () => {
    const all = useSelector(state => state.Core.Notification.history);
    const isHistoryOpen = useSelector(state => state.Core.Notification.isHistoryOpen);
    const [shown, setShown] = React.useState([]);
    const snackbar = notistack.useSnackbar();
    React.useEffect(() => {
        const missing = _.differenceBy(all, shown, 'id');
        if (!isHistoryOpen) {
            missing.forEach(notification => {
                snackbar.enqueueSnackbar(React.createElement(Card.Default, { notification: notification, temporary: true }), {
                    key: notification.id,
                    variant: notification.variant,
                    action: (React.createElement(React.Fragment, null,
                        notification.action && (notification.action(snackbar, notification.id, true)),
                        React.createElement(Button.Dismiss, { onClick: () => snackbar.closeSnackbar(notification.id) }))),
                });
            });
        }
        setShown([...shown, ...missing]);
    }, [all]);
    return null;
};
export default Notistack;
